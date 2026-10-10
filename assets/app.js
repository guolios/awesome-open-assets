/* =========================================================================
   Awesome Open Assets — 展示站点逻辑
   纯原生 JS，零依赖。数据源：window.AWESOME_ASSETS（tools/build_data.py 生成）
   ========================================================================= */
(function () {
  "use strict";

  var DATA = window.AWESOME_ASSETS || { meta: {}, categories: [], resources: [] };

  var I18N = {
    zh: {
      heroTitle: "全球开源素材资源导航",
      heroSub: "精选 " + (DATA.meta.totalResources || 0) + "+ 个全球开源 / CC 授权素材：图片、视频、音频、字体、3D、动效、配色与工具链，逐条标注许可与商用可行性。",
      heroBadge: "CC BY 4.0 · 持续更新",
      ctaRepo: "在 GitHub 查看仓库 ↗",
      ctaDocs: "阅读说明文档",
      searchPlaceholder: "搜索名称、特色、许可……",
      all: "全部",
      statResources: "资源条目",
      statCategories: "覆盖分类",
      statLicense: "授权协议",
      statUpdated: "最近更新",
      licenseLabel: "许可筛选",
      licAll: "全部许可",
      licYes: "可商用",
      licPartial: "部分可商用",
      licNo: "不可商用",
      resultCount: function (n) { return "共 " + n + " 个结果"; },
      visit: "访问官网",
      github: "GitHub",
      verify: "待核实",
      catGuide: "指南",
      guideHint: "这是一篇授权指南，点击查看完整文档 →",
      empty: "没有匹配的资源，换个关键词试试。",
      footNote: "一个持续维护的开源素材收藏清单。所有条目均经人工核实许可与存活性，正式取用前请再次确认。",
      footLicense: "基于 CC BY 4.0 授权",
      ghLink: "GitHub ↗"
    },
    en: {
      heroTitle: "Global Open-Source Asset Navigator",
      heroSub: "A curated index of " + (DATA.meta.totalResources || 0) + "+ open / CC-licensed assets worldwide — images, video, audio, fonts, 3D, motion, colors & tooling, each tagged with license and commercial viability.",
      heroBadge: "CC BY 4.0 · Maintained",
      ctaRepo: "View on GitHub ↗",
      ctaDocs: "Read the docs",
      searchPlaceholder: "Search name, highlight, license…",
      all: "All",
      statResources: "Resources",
      statCategories: "Categories",
      statLicense: "License",
      statUpdated: "Updated",
      licenseLabel: "License",
      licAll: "All licenses",
      licYes: "Commercial OK",
      licPartial: "Partial",
      licNo: "Restricted",
      resultCount: function (n) { return n + " results"; },
      visit: "Visit",
      github: "GitHub",
      verify: "verify",
      catGuide: "Guide",
      guideHint: "This is a license guide — open the full document →",
      empty: "No matching resources. Try another keyword.",
      footNote: "A maintained collection of open-source assets. Every entry is manually verified for license and availability — please re-confirm before production use.",
      footLicense: "Licensed under CC BY 4.0",
      ghLink: "GitHub ↗"
    }
  };

  var LIC_META = {
    yes: { icon: "✅", zh: "可商用", en: "Free" },
    partial: { icon: "⚠️", zh: "部分", en: "Partial" },
    no: { icon: "❌", zh: "不可商用", en: "Restricted" }
  };

  var state = {
    lang: "zh",
    theme: "light",
    query: "",
    cat: "all",
    license: "all"
  };

  // ---------- 初始化语言 / 主题 ----------
  function initPrefs() {
    var ls = window.localStorage;
    var savedLang = ls.getItem("aoa_lang");
    if (savedLang === "zh" || savedLang === "en") state.lang = savedLang;
    else state.lang = (navigator.language || "zh").toLowerCase().indexOf("zh") === 0 ? "zh" : "en";

    var savedTheme = ls.getItem("aoa_theme");
    if (savedTheme === "light" || savedTheme === "dark") state.theme = savedTheme;
    else state.theme = (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) ? "dark" : "light";
  }

  function applyTheme() {
    document.documentElement.setAttribute("data-theme", state.theme);
    var icon = document.querySelector("#themeToggle .theme-icon");
    if (icon) icon.textContent = state.theme === "dark" ? "☀️" : "🌙";
  }

  function applyLang() {
    var t = I18N[state.lang];
    document.documentElement.setAttribute("lang", state.lang === "zh" ? "zh-CN" : "en");
    document.getElementById("heroTitle").textContent = t.heroTitle;
    document.getElementById("heroSub").textContent = t.heroSub;
    document.getElementById("heroBadge").textContent = t.heroBadge;
    document.getElementById("ctaRepo").textContent = t.ctaRepo;
    document.getElementById("ctaDocs").textContent = t.ctaDocs;
    document.getElementById("search").placeholder = t.searchPlaceholder;
    document.getElementById("ghLink").textContent = t.ghLink;
    document.getElementById("footNote").textContent = t.footNote;
    document.getElementById("footLicense").textContent = t.footLicense;
    // 语言切换按钮高亮
    document.querySelectorAll("#langSwitch .seg-btn").forEach(function (b) {
      b.classList.toggle("is-active", b.getAttribute("data-lang") === state.lang);
    });
  }

  function t() { return I18N[state.lang]; }
  function pick(zh, en) { return state.lang === "zh" ? zh : en; }

  // ---------- Hero 统计 ----------
  function renderStats() {
    var m = DATA.meta;
    var items = [
      { num: m.totalResources || 0, label: t().statResources },
      { num: m.totalCategories || 0, label: t().statCategories },
      { num: m.license || "CC BY 4.0", label: t().statLicense },
      { num: (m.generated || "").slice(0, 7) || "—", label: t().statUpdated }
    ];
    var html = items.map(function (it) {
      return '<div class="stat"><div class="stat-num">' + esc(String(it.num)) + '</div><div class="stat-label">' + esc(it.label) + '</div></div>';
    }).join("");
    document.getElementById("heroStats").innerHTML = html;
  }

  // ---------- 分类筛选 chips ----------
  function renderCatChips() {
    var cats = DATA.categories;
    var html = '<button class="chip' + (state.cat === "all" ? " is-active" : "") + '" data-cat="all">' + esc(t().all) + '</button>';
    html += cats.map(function (c) {
      var title = state.lang === "zh" ? c.titleZh : c.titleEn;
      var guideTag = c.type === "guide" ? ' <span class="chip-count">·' + esc(t().catGuide) + '</span>' : '';
      return '<button class="chip' + (state.cat === c.id ? " is-active" : "") + '" data-cat="' + esc(c.id) + '">' +
        esc(title) + '<span class="chip-count">' + c.count + '</span>' + guideTag + '</button>';
    }).join("");
    document.getElementById("catChips").innerHTML = html;
  }

  // ---------- 许可筛选 chips ----------
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

  // ---------- 结果 ----------
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

  function renderResults() {
    var list = getFiltered();
    var box = document.getElementById("results");
    var empty = document.getElementById("emptyState");
    var countEl = document.getElementById("resultCount");

    // 指南分类：直接引导到文档
    var curCat = DATA.categories.filter(function (c) { return c.id === state.cat; })[0];
    if (curCat && curCat.type === "guide" && state.query === "") {
      box.innerHTML = '<div class="card" style="grid-column:1/-1;text-align:center">' +
        '<div class="card-highlight">' + esc(t().guideHint) + '</div>' +
        '<a class="card-link" href="' + esc(guideHref(curCat.id)) + '">' + esc(state.lang === "zh" ? curCat.titleZh : curCat.titleEn) + ' →</a>' +
        '</div>';
      countEl.textContent = "";
      empty.hidden = true;
      return;
    }

    countEl.textContent = t().resultCount(list.length);
    if (!list.length) {
      box.innerHTML = "";
      empty.hidden = false;
      empty.textContent = t().empty;
      return;
    }
    empty.hidden = true;

    var html = list.map(function (r) {
      var lm = LIC_META[r.commercial] || LIC_META.partial;
      var cat = DATA.categories.filter(function (c) { return c.id === r.cat; })[0];
      var catLabel = cat ? (state.lang === "zh" ? cat.titleZh : cat.titleEn) : r.cat;
      var sectionLabel = (r.sectionZh || r.sectionEn) ? (state.lang === "zh" ? r.sectionZh : r.sectionEn) : "";
      var hl = state.lang === "zh" ? r.highlightZh : r.highlightEn;
      var badgeText = state.lang === "zh" ? lm.zh : lm.en;

      var tags = [];
      tags.push('<span class="tag">' + esc(r.region) + '</span>');
      tags.push('<span class="tag">' + esc(r.license) + '</span>');

      var links = '<a class="card-link" href="' + esc(r.url) + '" target="_blank" rel="noopener">🔗 ' + esc(t().visit) + '</a>';
      if (r.github) links += '<a class="card-link" href="' + esc(r.github) + '" target="_blank" rel="noopener">⭐ ' + esc(t().github) + '</a>';

      var verify = r.verify ? '<span class="verify-tag">⚠️ ' + esc(t().verify) + '</span>' : '';

      return '<article class="card">' +
        '<div class="card-head">' +
          '<div><div class="card-name">' + esc(r.name) + '</div>' +
          '<div class="card-cat">' + esc(catLabel) + (sectionLabel ? ' · ' + esc(sectionLabel) : '') + '</div></div>' +
          '<span class="badge ' + r.commercial + '">' + lm.icon + ' ' + esc(badgeText) + '</span>' +
        '</div>' +
        '<div class="card-highlight">' + esc(hl) + '</div>' +
        '<div class="card-meta">' + tags.join("") + verify + '</div>' +
        '<div class="card-foot">' + links + '</div>' +
      '</article>';
    }).join("");
    box.innerHTML = html;
  }

  // ---------- 工具 ----------
  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function slugify(s) {
    return String(s || "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
  }
  // 指南分类（无资源行）按当前语言指向正确的文档文件名
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

  // ---------- 事件 ----------
  function bindEvents() {
    document.getElementById("search").addEventListener("input", function (e) {
      state.query = e.target.value;
      renderResults();
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
      renderResults();
    });

    document.getElementById("licenseChips").addEventListener("click", function (e) {
      var btn = e.target.closest(".chip");
      if (!btn) return;
      state.license = btn.getAttribute("data-license");
      renderLicenseChips();
      renderResults();
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
      renderResults();
    });

    document.getElementById("themeToggle").addEventListener("click", function () {
      state.theme = state.theme === "dark" ? "light" : "dark";
      window.localStorage.setItem("aoa_theme", state.theme);
      applyTheme();
    });
  }

  // ---------- 启动 ----------
  function main() {
    initPrefs();
    applyTheme();
    applyLang();
    renderStats();
    renderCatChips();
    renderLicenseChips();
    renderResults();
    bindEvents();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", main);
  } else {
    main();
  }
})();
