/* =========================================================================
   Awesome Open Assets — 展示站点逻辑（iOS Liquid Glass 版）
   纯原生 JS，零依赖。数据源：window.AWESOME_ASSETS（tools/build_data.py 生成）
   ========================================================================= */
(function () {
  "use strict";

  var DATA = window.AWESOME_ASSETS || { meta: {}, categories: [], resources: [] };
  var BATCH = 36;          // 分批渲染，避免 1100+ 卡片一次性入 DOM
  var BATCH_ANIMATE = 12;  // 每批带入场动画的卡片数上限

  /* ---------- SVG 图标库（SF Symbols 风格线性图标） ---------- */
  var ICONS = {
    check: '<svg class="ic-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>',
    warn: '<svg class="ic-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 9v4M12 17h.01"/><path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z"/></svg>',
    x: '<svg class="ic-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12"/></svg>',
    arrow: '<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 17 17 7M8 7h9v9"/></svg>',
    globe: '<svg class="ic-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a15 15 0 0 1 0 18 15 15 0 0 1 0-18Z"/></svg>',
    doc: '<svg class="ic-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 19.5V5a2 2 0 0 1 2-2h11l3 3v13.5a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 4 19.5Z"/><path d="M8 8h7M8 12h7M8 16h4"/></svg>'
  };

  var LIC_META = {
    yes:     { icon: ICONS.check, zh: "可商用",   en: "Free" },
    partial: { icon: ICONS.warn,  zh: "部分可商用", en: "Partial" },
    no:      { icon: ICONS.x,     zh: "不可商用", en: "Restricted" }
  };

  var I18N = {
    zh: {
      heroTitle: "全球开源素材资源导航",
      heroSub: "精选 " + (DATA.meta.totalResources || 0) + "+ 个全球开源 / CC 授权素材：图片、视频、音频、字体、3D、动效、配色与模板，逐条标注许可与商用可行性。",
      heroBadge: "CC BY 4.0 · 持续更新",
      ctaRepo: "在 GitHub 查看仓库",
      ctaDocs: "阅读说明文档",
      searchPlaceholder: "搜索名称、特色、许可……",
      all: "全部",
      statResources: "资源条目",
      statCategories: "覆盖分类",
      statLicense: "授权协议",
      statUpdated: "最近更新",
      licAll: "全部许可",
      licYes: "可商用",
      licPartial: "部分可商用",
      licNo: "不可商用",
      resultCount: function (n) { return "共 " + n + " 个结果"; },
      visit: "访问官网",
      github: "GitHub",
      verify: "待核实",
      catGuide: "指南",
      guideHint: "这是一篇授权指南，点击查看完整文档",
      loadingMore: "加载中…",
      empty: "没有匹配的资源，换个关键词试试。",
      footNote: "一个持续维护的开源素材收藏清单。所有条目均经人工核实许可与存活性，正式取用前请再次确认。",
      footLicense: "基于 CC BY 4.0 授权",
      ghLink: "GitHub"
    },
    en: {
      heroTitle: "Global Open-Source Asset Navigator",
      heroSub: "A curated index of " + (DATA.meta.totalResources || 0) + "+ open / CC-licensed assets worldwide — images, video, audio, fonts, 3D, motion, colors & templates, each tagged with license and commercial viability.",
      heroBadge: "CC BY 4.0 · Maintained",
      ctaRepo: "View on GitHub",
      ctaDocs: "Read the docs",
      searchPlaceholder: "Search name, highlight, license…",
      all: "All",
      statResources: "Resources",
      statCategories: "Categories",
      statLicense: "License",
      statUpdated: "Updated",
      licAll: "All licenses",
      licYes: "Commercial OK",
      licPartial: "Partial",
      licNo: "Restricted",
      resultCount: function (n) { return n + " results"; },
      visit: "Visit",
      github: "GitHub",
      verify: "verify",
      catGuide: "Guide",
      guideHint: "This is a license guide — open the full document",
      loadingMore: "Loading…",
      empty: "No matching resources. Try another keyword.",
      footNote: "A maintained collection of open-source assets. Every entry is manually verified for license and availability — please re-confirm before production use.",
      footLicense: "Licensed under CC BY 4.0",
      ghLink: "GitHub"
    }
  };

  var state = {
    lang: "zh",
    theme: "light",
    query: "",
    cat: "all",
    license: "all"
  };

  var filtered = [];        // 当前筛选结果全集
  var rendered = 0;         // 已渲染条数
  var sentinel = null;
  var observer = null;
  var searchTimer = null;

  /* ---------- 初始化语言 / 主题（支持 ?lang= / ?theme= URL 参数） ---------- */
  function initPrefs() {
    var qs = new URLSearchParams(window.location.search);

    var qLang = qs.get("lang");
    var savedLang = window.localStorage.getItem("aoa_lang");
    if (qLang === "zh" || qLang === "en") state.lang = qLang;
    else if (savedLang === "zh" || savedLang === "en") state.lang = savedLang;
    else state.lang = (navigator.language || "zh").toLowerCase().indexOf("zh") === 0 ? "zh" : "en";

    var qTheme = qs.get("theme");
    var savedTheme = window.localStorage.getItem("aoa_theme");
    if (qTheme === "light" || qTheme === "dark") state.theme = qTheme;
    else if (savedTheme === "light" || savedTheme === "dark") state.theme = savedTheme;
    else state.theme = (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) ? "dark" : "light";
  }

  function applyTheme() {
    document.documentElement.setAttribute("data-theme", state.theme);
  }

  function applyLang() {
    var t0 = I18N[state.lang];
    document.documentElement.setAttribute("lang", state.lang === "zh" ? "zh-CN" : "en");
    document.getElementById("heroTitle").textContent = t0.heroTitle;
    document.getElementById("heroSub").textContent = t0.heroSub;
    document.getElementById("ctaRepoText").textContent = t0.ctaRepo;
    document.getElementById("ctaDocsText").textContent = t0.ctaDocs;
    document.getElementById("search").placeholder = t0.searchPlaceholder;
    document.querySelector("#ghLink .gh-text").textContent = t0.ghLink;
    document.getElementById("footNote").textContent = t0.footNote;
    document.getElementById("footLicense").textContent = t0.footLicense;
    document.querySelectorAll("#langSwitch .seg-btn").forEach(function (b) {
      b.classList.toggle("is-active", b.getAttribute("data-lang") === state.lang);
    });
  }

  function t() { return I18N[state.lang]; }

  /* ---------- Hero 统计（数字滚动动画） ---------- */
  function animateNum(el, target) {
    if (!/^\d+$/.test(String(target))) { el.textContent = target; return; }
    var n = parseInt(target, 10);
    var start = null, dur = 750;
    function step(ts) {
      if (!start) start = ts;
      var p = Math.min((ts - start) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(n * eased);
      if (p < 1) window.requestAnimationFrame(step);
    }
    window.requestAnimationFrame(step);
  }

  function renderStats() {
    var m = DATA.meta;
    var items = [
      { num: m.totalResources || 0, label: t().statResources, animate: true },
      { num: m.totalCategories || 0, label: t().statCategories, animate: true },
      { num: m.license || "CC BY 4.0", label: t().statLicense, animate: false },
      { num: (m.generated || "").slice(0, 7) || "—", label: t().statUpdated, animate: false }
    ];
    var html = items.map(function (it, i) {
      return '<div class="stat"><div class="stat-num" id="statNum' + i + '">0</div><div class="stat-label">' + esc(it.label) + '</div></div>';
    }).join("");
    document.getElementById("heroStats").innerHTML = html;
    items.forEach(function (it, i) {
      var el = document.getElementById("statNum" + i);
      if (it.animate) animateNum(el, it.num);
      else el.textContent = it.num;
    });
  }

  /* ---------- 分类筛选 chips ---------- */
  function renderCatChips() {
    var cats = DATA.categories;
    var html = '<button class="chip' + (state.cat === "all" ? " is-active" : "") + '" data-cat="all">' + esc(t().all) + '</button>';
    html += cats.map(function (c) {
      var title = state.lang === "zh" ? c.titleZh : c.titleEn;
      return '<button class="chip' + (state.cat === c.id ? " is-active" : "") + '" data-cat="' + esc(c.id) + '">' +
        esc(title) + '<span class="chip-count">' + c.count + '</span></button>';
    }).join("");
    document.getElementById("catChips").innerHTML = html;
  }

  /* ---------- 许可筛选 chips ---------- */
  function renderLicenseChips() {
    var t0 = t();
    var defs = [
      { key: "all", label: t0.licAll },
      { key: "yes", label: t0.licYes },
      { key: "partial", label: t0.licPartial },
      { key: "no", label: t0.licNo }
    ];
    var html = defs.map(function (d) {
      return '<button class="chip' + (state.license === d.key ? " is-active" : "") + '" data-license="' + d.key + '">' + esc(d.label) + '</button>';
    }).join("");
    document.getElementById("licenseChips").innerHTML = html;
  }

  /* ---------- 筛选 ---------- */
  function getFiltered() {
    var q = state.query.trim().toLowerCase();
    var catTitleMap = {};
    DATA.categories.forEach(function (c) { catTitleMap[c.id] = c; });
    return DATA.resources.filter(function (r) {
      if (state.cat !== "all" && r.cat !== state.cat) return false;
      if (state.license !== "all" && r.commercial !== state.license) return false;
      if (q) {
        var hay = [r.name, r.highlightZh, r.highlightEn, r.license, r.region,
          (catTitleMap[r.cat] && (state.lang === "zh" ? catTitleMap[r.cat].titleZh : catTitleMap[r.cat].titleEn))].join(" ").toLowerCase();
        if (hay.indexOf(q) === -1) return false;
      }
      return true;
    });
  }

  /* ---------- 卡片渲染 ---------- */
  function cardHTML(r, idx) {
    var lm = LIC_META[r.commercial] || LIC_META.partial;
    var cat = DATA.categories.filter(function (c) { return c.id === r.cat; })[0];
    var catLabel = cat ? (state.lang === "zh" ? cat.titleZh : cat.titleEn) : r.cat;
    var sectionLabel = (r.sectionZh || r.sectionEn) ? (state.lang === "zh" ? r.sectionZh : r.sectionEn) : "";
    var hl = state.lang === "zh" ? r.highlightZh : r.highlightEn;
    var badgeText = state.lang === "zh" ? lm.zh : lm.en;

    var tags = '<span class="tag" title="' + esc(r.region) + ' · ' + esc(r.license) + '">' + esc(r.region) + ' · ' + esc(r.license) + '</span>';

    var links = '<a class="card-link" href="' + esc(r.url) + '" target="_blank" rel="noopener">' + ICONS.arrow + esc(t().visit) + '</a>';
    if (r.github) links += '<a class="card-link" href="' + esc(r.github) + '" target="_blank" rel="noopener">' + ICONS.arrow + esc(t().github) + '</a>';

    var verify = r.verify ? '<span class="verify-tag">' + ICONS.warn + esc(t().verify) + '</span>' : '';
    var enterCls = idx < BATCH_ANIMATE ? ' card-enter' : '';
    var delay = idx < BATCH_ANIMATE ? ' style="animation-delay:' + (idx * 30) + 'ms"' : '';

    return '<article class="card' + enterCls + '"' + delay + '>' +
      '<div class="card-head">' +
        '<div><div class="card-name">' + esc(r.name) + '</div>' +
        '<div class="card-cat">' + esc(catLabel) + (sectionLabel ? ' · ' + esc(sectionLabel) : '') + '</div></div>' +
        '<span class="badge ' + r.commercial + '">' + lm.icon + esc(badgeText) + '</span>' +
      '</div>' +
      '<div class="card-highlight">' + esc(hl) + '</div>' +
      '<div class="card-meta">' + tags + verify + '</div>' +
      '<div class="card-foot">' + links + '</div>' +
    '</article>';
  }

  /* ---------- 渲染入口（分批 + 懒加载） ---------- */
  function renderResults(reset) {
    var box = document.getElementById("results");
    var empty = document.getElementById("emptyState");
    var countEl = document.getElementById("resultCount");

    // 指南分类：直接引导到文档
    var curCat = DATA.categories.filter(function (c) { return c.id === state.cat; })[0];
    if (curCat && curCat.type === "guide" && state.query === "") {
      destroyObserver();
      box.innerHTML = '<div class="card" style="grid-column:1/-1;text-align:center">' +
        '<div class="card-highlight">' + esc(t().guideHint) + '</div>' +
        '<a class="card-link" style="justify-content:center" href="' + esc(guideHref(curCat.id)) + '">' + ICONS.doc + esc(state.lang === "zh" ? curCat.titleZh : curCat.titleEn) + ' →</a>' +
        '</div>';
      countEl.textContent = "";
      empty.hidden = true;
      return;
    }

    if (reset) {
      filtered = getFiltered();
      rendered = 0;
      box.innerHTML = "";
    }

    countEl.textContent = t().resultCount(filtered.length);
    if (!filtered.length) {
      destroyObserver();
      empty.hidden = false;
      empty.textContent = t().empty;
      return;
    }
    empty.hidden = true;

    var end = Math.min(rendered + BATCH, filtered.length);
    var html = "";
    for (var i = rendered; i < end; i++) html += cardHTML(filtered[i], i - rendered);
    box.insertAdjacentHTML("beforeend", html);
    rendered = end;

    if (rendered < filtered.length) setupObserver(box);
    else destroyObserver();
  }

  /* ---------- 滚动加载哨兵 ---------- */
  function setupObserver(box) {
    if (observer) { return; }
    sentinel = document.createElement("div");
    sentinel.className = "sentinel";
    box.appendChild(sentinel);
    observer = new IntersectionObserver(function (entries) {
      if (entries[0].isIntersecting) {
        if (sentinel) sentinel.remove();
        sentinel = null;
        observer.disconnect();
        observer = null;
        renderResults(false);
      }
    }, { rootMargin: "900px 0px" });
    observer.observe(sentinel);
  }
  function destroyObserver() {
    if (observer) { observer.disconnect(); observer = null; }
    if (sentinel) { sentinel.remove(); sentinel = null; }
  }

  /* ---------- 工具栏浮动状态（滚动时显示玻璃底） ---------- */
  function onScroll() {
    var tb = document.getElementById("toolbar");
    if (!tb) return;
    var floating = window.scrollY > 160;
    tb.classList.toggle("is-floating", floating);
  }

  /* ---------- 工具 ---------- */
  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function slugify(s) {
    return String(s || "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
  }
  var GUIDE_FILES = {
    "10": { zh: "10-licenses.md", en: "10-licenses.en.md" },
    "17": { zh: "17-media-licenses.md", en: "17-media-licenses.en.md" }
  };
  function guideHref(catId) {
    var g = GUIDE_FILES[catId];
    if (g) return "docs/" + g[state.lang];
    var cat = DATA.categories.filter(function (c) { return c.id === catId; })[0];
    var base = catId + "-" + slugify(cat ? cat.titleEn : "");
    return "docs/" + base + (state.lang === "en" ? ".en" : "") + ".md";
  }
  function isGuide(catId) {
    var cat = DATA.categories.filter(function (c) { return c.id === catId; })[0];
    return !!(cat && cat.type === "guide");
  }

  /* ---------- 事件 ---------- */
  function bindEvents() {
    document.getElementById("search").addEventListener("input", function (e) {
      var v = e.target.value;
      window.clearTimeout(searchTimer);
      searchTimer = window.setTimeout(function () {
        state.query = v;
        renderResults(true);
      }, 130);
    });

    document.getElementById("catChips").addEventListener("click", function (e) {
      var btn = e.target.closest(".chip");
      if (!btn) return;
      var id = btn.getAttribute("data-cat");
      state.cat = id;
      if (isGuide(id)) {
        window.location.href = guideHref(id);
        return;
      }
      renderCatChips();
      renderResults(true);
    });

    document.getElementById("licenseChips").addEventListener("click", function (e) {
      var btn = e.target.closest(".chip");
      if (!btn) return;
      state.license = btn.getAttribute("data-license");
      renderLicenseChips();
      renderResults(true);
    });

    document.getElementById("langSwitch").addEventListener("click", function (e) {
      var btn = e.target.closest(".seg-btn");
      if (!btn) return;
      state.lang = btn.getAttribute("data-lang");
      window.localStorage.setItem("aoa_lang", state.lang);
      applyLang();
      renderStats();
      renderCatChips();
      renderLicenseChips();
      renderResults(true);
    });

    document.getElementById("themeToggle").addEventListener("click", function () {
      state.theme = state.theme === "dark" ? "light" : "dark";
      window.localStorage.setItem("aoa_theme", state.theme);
      applyTheme();
    });

    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* ---------- 启动 ---------- */
  function main() {
    initPrefs();
    applyTheme();
    applyLang();
    renderStats();
    renderCatChips();
    renderLicenseChips();
    renderResults(true);
    bindEvents();
    onScroll();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", main);
  } else {
    main();
  }
})();
