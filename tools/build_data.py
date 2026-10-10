#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
build_data.py — 单一数据源构建脚本
从 docs/ 下的中文与英文分类文档解析出结构化数据，输出 assets/data.js
（全局变量 window.AWESOME_ASSETS），供展示站点与未来工具消费。

设计原则：
- 文档是唯一真相来源（single source of truth），改文档后重跑本脚本即可同步站点。
- 中英文通过「分类 id + 资源名称」对齐，互不依赖行顺序。
- 零第三方依赖，仅用标准库。
"""

import os
import re
import json
import datetime

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DOCS = os.path.join(ROOT, "docs")
OUT = os.path.join(ROOT, "assets", "data.js")

# 专题分组：编号 -> (中文, 英文)，供站点按专题分区展示
def group_of(cid):
    n = int(cid) if cid.isdigit() else 0
    if 1 <= n <= 10:
        return ("视觉素材", "Visual Assets")
    if 11 <= n <= 13:
        return ("3D 与空间", "3D & Spatial")
    if 14 <= n <= 16:
        return ("设计模板", "Design Templates")
    if 17 <= n <= 22:
        return ("动态与多媒体", "Motion & Media")
    if n == 23:
        return ("字体", "Fonts")
    if 24 <= n <= 27:
        return ("配色与工具", "Colors & Tooling")
    if 28 <= n <= 29:
        return ("指南", "Guides")
    return ("其他", "Other")

# ---------- 工具函数 ----------

def norm(s: str) -> str:
    return (s or "").strip()

FULL_PAREN = "（）"

def split_title(title: str):
    """'01 · 综合免费图库（Stock Photos）' -> ('01','综合免费图库','Stock Photos')"""
    # 去掉开头的 #
    t = title.lstrip("#").strip()
    # 按 · 拆分，第一部分是 id
    parts = [p.strip() for p in t.split("·")]
    cid = parts[0] if parts else ""
    rest = parts[1] if len(parts) > 1 else ""
    zh = rest
    en = ""
    m = re.search(r"[（(]([^（）()]*)[）)]", rest)
    if m:
        en = m.group(1).strip()
        zh = rest[: m.start()].strip()
    return cid, zh, en

def split_section(title: str):
    """'## 13.1 字体库与聚合站（Font Libraries）' -> ('13.1','字体库与聚合站','Font Libraries')"""
    t = title.lstrip("#").strip()
    m = re.match(r"^(\d+(?:\.\d+)?)\s*(.*)$", t)
    num = m.group(1) if m else ""
    rest = m.group(2) if m else t
    zh = rest
    en = ""
    mm = re.search(r"[（(]([^（）()]*)[）)]", rest)
    if mm:
        en = mm.group(1).strip()
        zh = rest[: mm.start()].strip()
    return num, zh, en

def normalize_commercial(cell: str) -> str:
    c = norm(cell)
    if "✅" in c:
        return "yes"
    if "❌" in c:
        return "no"
    if "⚠" in c:
        return "partial"
    return "unknown"

def normalize_attribution(cell: str, is_en: bool) -> str:
    c = norm(cell)
    if is_en:
        if c.lower().startswith("not"):
            return "not-required"
        if c.lower().startswith("req"):
            return "required"
        if c.lower().startswith("var"):
            return "varies"
    else:
        if "不需要" in c:
            return "not-required"
        if "需要" in c and "视" not in c:
            return "required"
        if "视情况" in c:
            return "varies"
    return "varies"

def normalize_signup(cell: str, is_en: bool) -> str:
    c = norm(cell)
    if is_en:
        if c.lower().startswith("no"):
            return "no"
        if c.lower().startswith("yes"):
            return "yes"
        if c.lower().startswith("part"):
            return "partial"
    else:
        if "否" in c:
            return "no"
        if "是" in c and "部" not in c:
            return "yes"
        if "部分" in c:
            return "partial"
    return "no"

# ---------- 文档解析 ----------

def parse_doc(path: str, is_en: bool):
    with open(path, encoding="utf-8") as f:
        lines = f.read().splitlines()

    cid = ""
    title = ""
    title_en = ""
    intro = []
    notes = []
    resources = []          # 顺序列表
    sections = {}           # num -> (zh, en)
    cur_section = None      # (num, zh, en)
    in_intro = True
    i = 0
    n = len(lines)
    while i < n:
        line = lines[i]
        s = line.strip()
        if s.startswith("# ") and not s.startswith("## "):
            cid, title, title_en = split_title(s)
            i += 1
            continue
        if s.startswith("## "):
            num, zh, en = split_section(s)
            cur_section = (num, zh, en)
            sections[num] = (zh, en)
            i += 1
            continue
        # 表头识别
        if s.startswith("|") and ("名称" in s or "Name" in s) and ("官网" in s or "Website" in s):
            # 跳过表头与分隔行
            i += 2
            in_intro = False
            while i < n and lines[i].strip().startswith("|") and "http" in lines[i]:
                row = [c.strip() for c in lines[i].split("|")]
                # 去掉首尾空字段
                row = [c for c in row if c != ""]
                if len(row) >= 9:
                    name = norm(row[0])
                    url = norm(row[1])
                    license_txt = norm(row[2])
                    commercial = normalize_commercial(row[3])
                    attribution = normalize_attribution(row[4], is_en)
                    signup = normalize_signup(row[5], is_en)
                    region = norm(row[6])
                    highlight = norm(row[7])
                    github = norm(row[8])
                    if github in ("—", "-", ""):
                        github = ""
                    verify = ("待核实" in highlight) or ("⚠️ verify" in highlight)
                    sec = cur_section  # (num, zh, en) or None
                    resources.append({
                        "name": name,
                        "url": url,
                        "license": license_txt,
                        "commercial": commercial,
                        "attribution": attribution,
                        "signup": signup,
                        "region": region,
                        "highlight": highlight,
                        "github": github,
                        "verify": verify,
                        "sectionNum": sec[0] if sec else "",
                        "sectionZh": sec[1] if sec else "",
                        "sectionEn": sec[2] if sec else "",
                    })
                i += 1
            continue
        # 收集导语（表前的 > 行与图例行），跳过语言切换行
        if in_intro and (s.startswith(">") or s.startswith("**图例")) and not s.startswith("> 🌐"):
            txt = s.lstrip(">").strip()
            if txt:
                intro.append(txt)
            i += 1
            continue
        # 收集文末备注（表后的 > 行，含 选型建议），跳过语言切换行
        if (not in_intro) and s.startswith(">") and not s.startswith("> 🌐"):
            txt = s.lstrip(">").strip()
            if txt:
                notes.append(txt)
            i += 1
            continue
        i += 1

    return {
        "cid": cid,
        "title": title,
        "title_en": title_en,
        "intro": intro,
        "notes": notes,
        "resources": resources,
        "sections": sections,
    }


def main():
    # 中文文档（排除 .en.md）
    zh_files = sorted(
        f for f in os.listdir(DOCS)
        if f.endswith(".md") and not f.endswith(".en.md") and f[0].isdigit()
    )
    categories = []
    resources = []
    rid = 0

    for f in zh_files:
        base = f[:-3]
        zh_path = os.path.join(DOCS, f)
        en_path = os.path.join(DOCS, base + ".en.md")
        zh = parse_doc(zh_path, is_en=False)
        en = parse_doc(en_path, is_en=True) if os.path.exists(en_path) else None

        title_en = zh["title_en"]
        intro_en = []
        notes_en = []
        en_by_name = {}
        en_sections = {}
        if en:
            title_en = en["title_en"] or zh["title_en"]
            en_by_name = {r["name"]: r for r in en["resources"]}
            en_sections = en["sections"]
            # 英文导语/备注直接使用英文文档中的对应内容
            intro_en = en["intro"]
            notes_en = en["notes"]

        count = len(zh["resources"])
        cat_type = "guide" if count == 0 else "resources"
        gz, ge = group_of(zh["cid"])
        categories.append({
            "id": zh["cid"],
            "titleZh": zh["title"],
            "titleEn": title_en,
            "introZh": " ".join(zh["intro"]),
            "introEn": " ".join(intro_en),
            "notesZh": zh["notes"],
            "notesEn": notes_en,
            "count": count,
            "type": cat_type,
            "groupZh": gz,
            "groupEn": ge,
        })

        for r in zh["resources"]:
            rid += 1
            en_r = en_by_name.get(r["name"])
            highlight_en = en_r["highlight"] if en_r else r["highlight"]
            sec_en = en_sections.get(r["sectionNum"], ("", ""))[1] if r["sectionNum"] else r["sectionEn"]
            resources.append({
                "id": f"{zh['cid']}-{rid:04d}",
                "cat": zh["cid"],
                "sectionZh": r["sectionZh"],
                "sectionEn": sec_en,
                "name": r["name"],
                "url": r["url"],
                "license": r["license"],
                "commercial": r["commercial"],
                "attribution": r["attribution"],
                "signup": r["signup"],
                "region": r["region"],
                "highlightZh": r["highlight"],
                "highlightEn": highlight_en,
                "github": r["github"],
                "verify": r["verify"],
            })

    payload = {
        "meta": {
            "generated": datetime.date.today().isoformat(),
            "totalResources": len(resources),
            "totalCategories": len(categories),
            "license": "CC BY 4.0",
            "repository": "https://github.com/guolios/awesome-open-assets",
        },
        "categories": categories,
        "resources": resources,
    }

    os.makedirs(os.path.dirname(OUT), exist_ok=True)
    with open(OUT, "w", encoding="utf-8") as f:
        f.write("// 由 tools/build_data.py 自动生成，请勿手工编辑。\n")
        f.write("// Generated by tools/build_data.py — do not edit by hand.\n")
        f.write("window.AWESOME_ASSETS = ")
        json.dump(payload, f, ensure_ascii=False, indent=2)
        f.write(";\n")

    print(f"已生成 {OUT}")
    print(f"  分类数: {len(categories)}")
    print(f"  资源数: {len(resources)}")
    print(f"  缺英文 highlight 的资源数: {sum(1 for r in resources if r['highlightEn'] == r['highlightZh'] and r['highlightZh'])}")


if __name__ == "__main__":
    main()
