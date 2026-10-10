<p align="center">
  <a href="README.md">简体中文</a> ·
  <a href="README.zh-TW.md">繁體中文</a> ·
  <a href="README.en.md"><b>English</b></a>
</p>

<p align="center">
  <img alt="Awesome Open Assets" src="assets/logo.svg" width="96" height="96">
</p>

<p align="center">
  <img alt="License" src="https://img.shields.io/badge/license-CC%20BY%204.0-blue">
  <img alt="Resources" src="https://img.shields.io/badge/resources-378-blue">
  <img alt="Categories" src="https://img.shields.io/badge/categories-17-blue">
  <img alt="Languages" src="https://img.shields.io/badge/languages-zh--CN%20%7C%20zh--TW%20%7C%20en-informational">
  <img alt="Live Site" src="https://img.shields.io/badge/live%20site-github.io-brightgreen">
  <img alt="Updated" src="https://img.shields.io/badge/updated-2026--10-success">
</p>

# Awesome Open Assets · Open-Source Asset Navigator

> 🌏 A categorized index of open-source / free-for-commercial-use assets worldwide — Curated index of openly-licensed assets for creators & developers.
> Every entry is annotated with **license terms, commercial-use permission, and attribution requirements**, so you can grab and use them without worrying about copyright landmines.

**Scope**: **378 resource entries** (categories 01–16) + **2 license guides** (10, 17) ｜ **17 categories** ｜ **Last updated**: 2026-10 ｜ **Maintenance**: actively maintained

Covers nine major domains — **images · video · audio · fonts · motion · 3D · game art · color palettes · tooling** — and provides documentation in **Simplified Chinese / Traditional Chinese / English** plus a bilingual live showcase site.

## Table of Contents

- [🌐 Live Showcase Site](#live-showcase-site)
- [Why the Name](#why-the-name)
- [Quick Picks (by Scenario)](#quick-picks-by-scenario)
- [Category Index](#category-index)
- [Table Field Reference](#table-field-reference)
- [Multilingual & Project Structure](#multilingual--project-structure)
- [Usage Tips](#usage-tips)
- [Contributing & Maintenance](#contributing--maintenance)
- [Disclaimer](#disclaimer)
- [License](#license)

---

## 🌐 Live Showcase Site

Beyond the Markdown docs, this project also ships a **zero-dependency, pure static showcase site** that supports one-click Chinese/English switching, light & dark themes, real-time search, and filtering by "category / license" — ideal for sharing directly with your team or serving as an internal asset hub entry point:

- **GitHub Pages (live)**: https://guolios.github.io/awesome-open-assets/
- **Site source**: [`index.html`](index.html) · [`assets/`](assets/) (stylesheets, interactive scripts, and data source)
- **Data source**: [`tools/build_data.py`](tools/build_data.py) parses the `docs/` documents to generate [`assets/data.js`](assets/data.js); **the documentation is the single source of truth** — edit the docs and re-run the script to sync the site, so they never drift apart

> The site reads from `assets/data.js` (a global variable), so it can be deployed to GitHub Pages or simply opened locally by double-clicking `index.html` — no build step required.

---

## Why the Name

This repository is a **long-term asset ledger**, so the naming deliberately leaves room to grow:

| Aspect | Design Rationale |
| --- | --- |
| `assets` not `images` | Future-proof: can smoothly expand to fonts, SFX, video, palettes, design-system files, etc., without renaming or migrating the repo |
| `open` not `free` | Emphasizes **clearly commercial-usable licensing**, not just "free pictures" |
| `awesome-` prefix | The de-facto discovery prefix in the GitHub ecosystem — easy to find and immediately understandable |

> One-line positioning: **The Awesome List of creative assets — Chinese-first docs, but globally-sourced resources.**

> ✅ This naming has already paid off once: the repo started with only images (150 entries); today video, audio, fonts, motion, palettes, and tooling all share the same classification and field system, and **not a single word of the repo name, Description, or directory structure has changed** — that's exactly why we avoided `awesome-free-images`.

---

## Quick Picks (by Scenario)

| I want to… | Go here | Why |
| --- | --- | --- |
| Find a photo to drop straight into a PPT / landing page | [Unsplash](https://unsplash.com) · [Pexels](https://www.pexels.com) | Highest quality, no attribution required, only the resale of original files is prohibited |
| Find the cleanest-licensed (CC0) photo | [StockSnap](https://stocksnap.io) · [Negative Space](https://negativespace.co) · [Pixnio](https://pixnio.com) | Entire site is CC0 — equivalent to waiving copyright |
| Find a video clip ready to cut into your footage | [Pexels Videos](https://www.pexels.com/videos/) · [Coverr](https://coverr.co/) · [Mixkit](https://mixkit.co/free-stock-video/) | No attribution, mostly 4K, only ban is bundling and reselling |
| Find background music or SFX | [Pixabay Music](https://pixabay.com/music/) · [Mixkit Music](https://mixkit.co/free-stock-music/) · [Freesound](https://freesound.org/) | First two need no attribution; on Freesound use the License filter to exclude NC |
| Find a commercially-usable font | [Google Fonts](https://fonts.google.com/) · [Source Han Sans](https://github.com/adobe-fonts/source-han-sans) · [LXGW WenKai](https://github.com/lxgw/LxgwWenKai) | SIL OFL 1.1 — embeddable, modifiable, no attribution |
| Find a commercially-usable **Chinese** font | [Alibaba PuHuiTi 3.0](https://www.alibabafonts.com/) · [ZCOOL 8 fonts](https://www.zcool.com.cn/special/zcoolfonts/) · [Smiley Sans](https://github.com/atelier-anchor/smiley-sans) | OFL or vendor-declared free commercial use; note ZCOOL prohibits renaming |
| Find multi-script fonts (Mongolian / Tibetan / Sanskrit / Arabic, etc.) | [Noto Fonts](https://fonts.google.com/noto) · [BabelStone](https://babelstone.co.uk/Fonts/) · [SIL Fonts](https://software.sil.org/fonts/) | Most multi-script families are OFL; mind vertical Mongolian and RTL text direction |
| Add animations / Lottie to a page | [lottie-web](https://github.com/airbnb/lottie-web) · [UseAnimations](https://useanimations.com/) · [Lordicon](https://lordicon.com/) | Runtime is fully MIT; Lordicon's free tier is commercial-usable but requires attribution |
| Find historical / space / government imagery | [NASA Images](https://images.nasa.gov) · [U.S. National Archives](https://catalog.archives.gov/) · [Internet Archive](https://archive.org/details/movies) | Mostly public domain, but check each item's Rights Statement |
| Get icons for your project | [Lucide](https://lucide.dev) · [Tabler Icons](https://tabler.io/icons) · [Iconify](https://iconify.design) | MIT / ISC, 1700–6200+ icons, no attribution |
| Find flat-style illustrations | [unDraw](https://undraw.co) · [Mixkit](https://mixkit.co) · [Open Peeps](https://www.openpeeps.com) | Recolor in real time, usable without attribution |
| Need textures / HDRI for 3D / rendering | [Poly Haven](https://polyhaven.com) · [ambientCG](https://ambientcg.com) | Entire site CC0, most complete PBR material library |
| Need art assets for a game prototype | [Kenney](https://kenney.nl/assets) · [OpenGameArt](https://opengameart.org) · [Quaternius](https://quaternius.com) | Kenney is all CC0 — the most hassle-free |
| Search all CC-licensed assets at once | [Openverse](https://openverse.org) | Aggregates 800M+ items, provides an API |
| Need compression / transcoding / image hosting | [sharp](https://sharp.pixelplumbing.com) · [Squoosh](https://squoosh.app) · [imgproxy](https://imgproxy.net) | All open-source projects, free for commercial use |

---

## Category Index

### 📷 Images & Visual (01–09, 136 entries; 10 is a license guide)

| # | Category | File | Entries |
| --- | --- | --- | --- |
| 01 | 综合免费图库 Stock Photos | [docs/01-stock-photos.md](docs/01-stock-photos.md) | 26 |
| 02 | 公共领域与机构典藏 Public Domain | [docs/02-public-domain.md](docs/02-public-domain.md) | 19 |
| 03 | 矢量图与插画 Vector & Illustration | [docs/03-vector-illustration.md](docs/03-vector-illustration.md) | 15 |
| 04 | 图标资源 Icons | [docs/04-icons.md](docs/04-icons.md) | 18 |
| 05 | 3D / 贴图 / HDRI 与纹理 3D & Textures | [docs/05-3d-textures-hdri.md](docs/05-3d-textures-hdri.md) | 11 |
| 06 | Emoji 与头像 Emoji & Avatars | [docs/06-emoji-avatars.md](docs/06-emoji-avatars.md) | 9 |
| 07 | AI 工具与授权搜索引擎 AI & Search | [docs/07-ai-tools-search.md](docs/07-ai-tools-search.md) | 12 |
| 08 | 像素风与游戏美术 Pixel Art & Game Assets | [docs/08-pixel-game-assets.md](docs/08-pixel-game-assets.md) | 12 |
| 09 | 图片处理与优化工具 Processing & Tooling | [docs/09-image-tooling.md](docs/09-image-tooling.md) | 14 |
| 10 | 📕 授权速查与常见坑 License Basics | [docs/10-licenses.md](docs/10-licenses.md) | 14 |

### 🎬 Multimedia (11–16, 242 entries; 17 is a license guide)

| # | Category | File | Entries |
| --- | --- | --- | --- |
| 11 | 开源视频素材 Video Footage | [docs/11-video-footage.md](docs/11-video-footage.md) | 23 |
| 12 | 开源音频与音乐 Audio, Music & SFX | [docs/12-audio-music-sfx.md](docs/12-audio-music-sfx.md) | 28 |
| 13 | 开源字体 Fonts（含英/中/少数民族/梵文/泰文/阿拉伯/西里尔等） | [docs/13-fonts.md](docs/13-fonts.md) | 139 |
| 14 | 动效与 UI 动画 Motion & Animation | [docs/14-motion-animation.md](docs/14-motion-animation.md) | 14 |
| 15 | 配色 / 渐变 / 背景生成器 Colors & Generators | [docs/15-colors-generators.md](docs/15-colors-generators.md) | 22 |
| 16 | 音视频处理开源工具 Media Tooling | [docs/16-media-tooling.md](docs/16-media-tooling.md) | 16 |
| 17 | 📕 多媒体授权速查与常见坑 Media License Basics | [docs/17-media-licenses.md](docs/17-media-licenses.md) | — |

> 10 and 17 are **license-knowledge articles** (clause quick-reference + pitfall checklists) and are not counted as resource entries. 10 covers general terms (CC / MIT / OFL / Apache, etc.), while 17 covers multimedia-specific pitfalls (rights layering, font proof, Lottie third-party IP, etc.).

---

## Multilingual & Project Structure

This project is deliberately structured to be **multilingual and standardized**, making it easy for international collaborators and long-term maintenance:

**Language Coverage**
- The repo homepage and docs are available in **Simplified Chinese / Traditional Chinese / English**: `README.md` · `README.zh-TW.md` · `README.en.md`, switchable from the top.
- Every category doc has a bilingual companion: Chinese `docs/01-stock-photos.md` ↔ English `docs/01-stock-photos.en.md` (each has a language-switch line at the top).
- The live site has a built-in language toggle (中文 / EN) and light/dark theme, with preferences stored locally in the browser.

**Directory Structure**

```
awesome-open-assets/
├── index.html            # Bilingual showcase site (deployable to GitHub Pages directly)
├── assets/
│   ├── style.css         # Site styles (light & dark themes)
│   ├── app.js            # Site logic (search / filter / language switch)
│   ├── data.js           # Auto-generated structured data source (do not edit by hand)
│   └── logo.svg          # Project logo / favicon
├── docs/                 # 17 category docs (Chinese .md + English .en.md)
│   ├── 01-stock-photos.md
│   ├── 01-stock-photos.en.md
│   └── … (and so on)
├── tools/
│   └── build_data.py     # Single-source script that parses docs/ to generate assets/data.js
├── README.md             # Simplified Chinese (default)
├── README.zh-TW.md       # Traditional Chinese
├── README.en.md          # English
├── CONTRIBUTING.md
└── LICENSE               # Full CC BY 4.0 text
```

> Naming convention: filenames stay in English (most URL- and cross-platform-friendly), and **language differences live in the content** — exactly the common practice of major open-source projects (e.g., from Google / Vercel).

---

## Table Field Reference (shared by all category files)

| Field | Values | Meaning |
| --- | --- | --- |
| **License** | CC0 / MIT / Apache-2.0 / custom license … | The license terms that apply to the asset. Hybrid platforms are marked "Mixed" |
| **Free for commercial** | ✅ Yes / ⚠️ Partial / ❌ No | "Partial" = only specific collections, a free plan, or with restrictions |
| **Attribution** | Not required / Required / Depends | Whether you must credit the source in your work |
| **Registration** | No / Yes / Partial | Whether downloading requires an account |
| **Region** | US / EU / CN / Global … | Primary language or the region of the maintainer |
| **GitHub** | Link or `—` | Repo URL if it's an open-source asset project |

> ⚠️ **"Partial" does not mean "use freely".** When you see ⚠️, click through to see exactly which part is free and what you must do to stay compliant. Entries marked **To verify** mean the license or liveness could not be 100% confirmed during research — please manually re-check before inclusion.

---

## Usage Tips

1. **Lock the scenario before picking a platform** — For consumer-facing campaigns go to Unsplash / Pexels first; for asset remixing use only CC0 / museum collections.
2. **Keep proof when you download** — For important projects, screenshot the license page on the day of download. Pixabay, for example, switched from CC0 to its own license in 2019; terms do change.
3. **Avoid recognizable people and trademarks** — Using identifiable people in ads requires separate model releases; logos within assets are not protected by CC licenses.
4. **Be cautious with AI-generated content** — Most stock sites now mix in AI-generated content; purely AI-generated works may not be copyrightable in many jurisdictions.
5. **Check the three layers of music rights** — A single track involves composition, sound recording, and performance rights; securing one layer ≠ securing all.
6. **Check whether a font is OFL or a vendor statement** — SIL OFL allows embedding, modification, and redistribution, but you may not sell the font files alone; ZCOOL / Alibaba / MiSans etc. are unilateral vendor statements — archive them and follow the additional conditions.
7. **Datasets default to research-only** — Datasets with NC / -SA clauses (ESC-50, UrbanSound8K, etc.) exceed their scope if used to train commercial models.
8. **Never build a stock-site competitor from the assets** — This is an explicit ban across all platforms and the single most litigated clause.

See also [10 · License Quick Reference](docs/10-licenses.md) and [17 · Multimedia License Quick Reference](docs/17-media-licenses.md).

---

## Contributing & Maintenance

We welcome new open-source / free-for-commercial-use asset sites. Before submitting, please read [CONTRIBUTING.md](CONTRIBUTING.md) and keep the table format consistent:

```
| 名称 | URL | 许可 | 免费商用 | 署名 | 需注册 | 地区 | 一句话特色 | GitHub |
```

Collaboration conventions:

- **Bilingual sync**: When adding or modifying a resource, update the corresponding English companion file (`docs/XX-*.en.md`) so Chinese and English rows stay line-for-line aligned.
- **Regenerate the data source**: After editing docs, run `python3 tools/build_data.py` to auto-update `assets/data.js` and sync the site — do not edit `assets/data.js` by hand.
- Every category doc has a language-switch line at the top; take care not to break it when editing.

Inclusion criteria:

- ✅ Must be a **real, accessible** site or open-source repo (please open it to confirm before submitting)
- ✅ License terms must be **explicit**, and at least part of the content must be free for commercial use
- ✅ When in doubt, leave it out — don't pad the list
- ❌ Sites that are shut down, fully paywalled, or have unclear terms should be removed, with the reason noted in the PR

> Found a broken link? Feel free to open an Issue.

---

## Disclaimer

The information compiled in this repository is current as of **2026-10**; each site's license terms may change at any time. All entries are for reference only and **do not constitute legal advice**. Before using them in commercial projects, rely on the official license page of the asset site; for significant commercial interests, consult legal counsel.

---

## License

The **curated content** of this repository (document structure and classification system) is licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/); please credit the source when republishing. The assets themselves follow their respective platforms' license terms — refer to the original site's documentation.
