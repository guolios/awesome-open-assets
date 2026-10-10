<p align="center">
  <a href="README.md"><b>简体中文</b></a> ·
  <a href="README.zh-TW.md">繁體中文</a> ·
  <a href="README.en.md">English</a>
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

# Awesome Open Assets · 开源素材资源导航

> 🌏 全球开源 / 免费可商用素材资源的分类索引 — Curated index of openly-licensed assets for creators & developers.
> 逐条标注**许可条款、可否商用、是否需署名**，拿来就能用，不用担心版权地雷。

**收录规模**：**378 个资源条目**（01–16 类）+ **2 篇授权指南**（10、17）｜ **17 个分类** ｜ **更新时间**：2026-10 ｜ **维护状态**：持续更新中

覆盖 **图片 · 视频 · 音频 · 字体 · 动效 · 3D · 游戏美术 · 配色 · 工具链** 九大领域，并提供**简体中文 / 繁體中文 / English** 三语文档与双语在线展示站点。

## 目录导航

- [🌐 在线展示站点](#在线展示站点)
- [为什么叫这个名字](#为什么叫这个名字)
- [快速推荐（按场景速查）](#快速推荐按场景速查)
- [分类目录](#分类目录)
- [表格字段说明](#表格字段说明)
- [多语言与项目结构](#多语言与项目结构)
- [使用姿势建议](#使用姿势建议)
- [贡献与维护](#贡献与维护)
- [免责声明](#免责声明)
- [License](#license)

---

## 🌐 在线展示站点

除了 Markdown 文档，本项目还提供一个**零依赖的纯静态展示站点**，支持中英文一键切换、明暗双主题、实时搜索与「分类 / 许可」筛选，适合直接分享给团队或作为内部素材中台入口：

- **GitHub Pages 线上版**：https://guolios.github.io/awesome-open-assets/
- **站点源码**：[`index.html`](index.html) · [`assets/`](assets/)（样式表、交互脚本与数据源）
- **数据源**：由 [`tools/build_data.py`](tools/build_data.py) 从 `docs/` 文档解析生成 [`assets/data.js`](assets/data.js)；**文档是唯一真相来源**，改完文档重跑脚本即可让站点同步，永不脱节

> 站点读取的是 `assets/data.js`（全局变量），因此既能部署到 GitHub Pages，也能直接双击 `index.html` 本地打开，无需构建步骤。

---

## 为什么叫这个名字

这个仓库是**长期使用的素材资源台账**，所以命名刻意保留了扩展空间：

| 维度 | 设计考虑 |
| --- | --- |
| `assets` 而非 `images` | 未来可以平滑扩展到字体、音效、视频、配色、设计系统文件等，不必改名或迁仓 |
| `open` 而非 `free` | 强调**授权明确可商用**，而不只是"不要钱的图" |
| `awesome-` 前缀 | GitHub 生态约定俗成 discovery 型仓库前缀，别人搜得到、一看就懂用途 |

> 一句话定位：**素材界的 Awesome List，中文优先，但资源站以全球为主。**

> ✅ 这个命名已经兑现过一次：仓库最初只有图片类（150 条），如今视频、音频、字体、动效、配色、工具链全部并入同一套分类与字段体系，
> **仓库名、Description、目录结构一个字都没改** —— 这就是当初不用 `awesome-free-images` 的原因。

---

## 快速推荐（按场景速查）

| 我想… | 直接去这里 | 理由 |
| --- | --- | --- |
| 找一张能直接放进 PPT / 落地页的照片 | [Unsplash](https://unsplash.com) · [Pexels](https://www.pexels.com) | 质量最高，免署名，禁售原图而已 |
| 找一张**授权最干净**（CC0）的图 | [StockSnap](https://stocksnap.io) · [Negative Space](https://negativespace.co) · [Pixnio](https://pixnio.com) | 全站 CC0，等同于放弃著作权 |
| 找一段能直接剪进片子的视频 | [Pexels Videos](https://www.pexels.com/videos/) · [Coverr](https://coverr.co/) · [Mixkit](https://mixkit.co/free-stock-video/) | 免署名，4K 为主，唯一禁令是不得打包转售 |
| 找一段配乐或音效 | [Pixabay Music](https://pixabay.com/music/) · [Mixkit Music](https://mixkit.co/free-stock-music/) · [Freesound](https://freesound.org/) | 前两个免署名；Freesound 记得用 License 过滤掉 NC |
| 找一支能商用的字体 | [Google Fonts](https://fonts.google.com/) · [思源黑体](https://github.com/adobe-fonts/source-han-sans) · [霞鹜文楷](https://github.com/lxgw/LxgwWenKai) | SIL OFL 1.1，可嵌入、可改、免署名 |
| 找一支能商用的**中文**字体 | [阿里巴巴普惠体 3.0](https://www.alibabafonts.com/) · [站酷 8 款](https://www.zcool.com.cn/special/zcoolfonts/) · [得意黑](https://github.com/atelier-anchor/smiley-sans) | OFL 或厂商明示免费商用，注意站酷禁改名 |
| 找蒙古文 / 藏文 / 梵文 / 阿拉伯文等多语种字体 | [Noto Fonts](https://fonts.google.com/noto) · [BabelStone](https://babelstone.co.uk/Fonts/) · [SIL 字体库](https://software.sil.org/fonts/) | 多语支系多为 OFL；注意竖排蒙古文与 RTL 文字方向 |
| 给页面加动画 / Lottie | [lottie-web](https://github.com/airbnb/lottie-web) · [UseAnimations](https://useanimations.com/) · [Lordicon](https://lordicon.com/) | 运行时全 MIT；Lordicon 免费档可商用但须署名 |
| 找历史 / 航天 / 政府影像 | [NASA Images](https://images.nasa.gov) · [美国国家档案馆](https://catalog.archives.gov/) · [Internet Archive](https://archive.org/details/movies) | 多为公有领域，但须看单条 Rights Statement |
| 给项目配图标 | [Lucide](https://lucide.dev) · [Tabler Icons](https://tabler.io/icons) · [Iconify](https://iconify.design) | MIT / ISC，1700–6200+ 图标，免署名 |
| 找扁平风插画 | [unDraw](https://undraw.co) · [Mixkit](https://mixkit.co) · [Open Peeps](https://www.openpeeps.com) | 可实时改主色，免署名可用 |
| 做 3D / 渲染要贴图 HDRI | [Poly Haven](https://polyhaven.com) · [ambientCG](https://ambientcg.com) | 全站 CC0，PBR 材质最全 |
| 做游戏原型要美术资源 | [Kenney](https://kenney.nl/assets) · [OpenGameArt](https://opengameart.org) · [Quaternius](https://quaternius.com) | Kenney 全 CC0 最省心 |
| 一次搜遍所有 CC 授权素材 | [Openverse](https://openverse.org) | 聚合 8 亿+ 条，提供 API |
| 需要压缩 / 转码 / 建图床 | [sharp](https://sharp.pixelplumbing.com) · [Squoosh](https://squoosh.app) · [imgproxy](https://imgproxy.net) | 均为开源项目，商用无成本 |

---

## 分类目录

### 📷 图片与视觉（01–09，共 136 条；10 为授权指南）

| # | 分类 | 文件 | 条目数 |
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

### 🎬 多媒体（11–16，共 242 条；17 为授权指南）

| # | 分类 | 文件 | 条目数 |
| --- | --- | --- | --- |
| 11 | 开源视频素材 Video Footage | [docs/11-video-footage.md](docs/11-video-footage.md) | 23 |
| 12 | 开源音频与音乐 Audio, Music & SFX | [docs/12-audio-music-sfx.md](docs/12-audio-music-sfx.md) | 28 |
| 13 | 开源字体 Fonts（含英/中/少数民族/梵文/泰文/阿拉伯/西里尔等） | [docs/13-fonts.md](docs/13-fonts.md) | 139 |
| 14 | 动效与 UI 动画 Motion & Animation | [docs/14-motion-animation.md](docs/14-motion-animation.md) | 14 |
| 15 | 配色 / 渐变 / 背景生成器 Colors & Generators | [docs/15-colors-generators.md](docs/15-colors-generators.md) | 22 |
| 16 | 音视频处理开源工具 Media Tooling | [docs/16-media-tooling.md](docs/16-media-tooling.md) | 16 |
| 17 | 📕 多媒体授权速查与常见坑 Media License Basics | [docs/17-media-licenses.md](docs/17-media-licenses.md) | — |

> 10 与 17 是**授权知识篇**（条款速查 + 避坑清单），不计入资源条目数。
> 10 讲通用条款（CC / MIT / OFL / Apache 等），17 讲多媒体领域特有的雷区（权利分层、字体举证、Lottie 第三方 IP 等）。

---

## 多语言与项目结构

本项目刻意做成了**多语言、规范化**的结构，方便国际协作者与长期维护：

**语言覆盖**
- 仓库主页与说明文档提供 **简体中文 / 繁體中文 / English** 三版：`README.md` · `README.zh-TW.md` · `README.en.md`，顶部互相切换。
- 每个分类文档都有中英双语伴侣：中文 `docs/01-stock-photos.md` ↔ 英文 `docs/01-stock-photos.en.md`（顶部均有语言切换行）。
- 在线站点内置语言开关（中文 / EN）与明暗主题，偏好记忆在浏览器本地。

**目录结构**

```
awesome-open-assets/
├── index.html            # 双语展示站点（可直接 GitHub Pages 部署）
├── assets/
│   ├── style.css         # 站点样式（明暗双主题）
│   ├── app.js            # 站点逻辑（搜索 / 筛选 / 语言切换）
│   ├── data.js           # 由工具自动生成的结构化数据源（请勿手改）
│   └── logo.svg          # 项目 Logo / favicon
├── docs/                 # 17 个分类文档（中文 .md + 英文 .en.md）
│   ├── 01-stock-photos.md
│   ├── 01-stock-photos.en.md
│   └── …（依此类推）
├── tools/
│   └── build_data.py     # 解析 docs/ 生成 assets/data.js 的单一数据源脚本
├── README.md             # 简体中文（默认）
├── README.zh-TW.md       # 繁體中文
├── README.en.md          # English
├── CONTRIBUTING.md
└── LICENSE               # CC BY 4.0 全文
```

> 命名约定：文件名保持英文（对 URL 与跨平台最友好），**语言差异放在内容上**——这正是大厂开源项目（如 Google / Vercel 出品）的通用做法。

---

## 表格字段说明（所有分类文件通用）

| 字段 | 取值 | 含义 |
| --- | --- | --- |
| **许可 / License** | CC0 / MIT / Apache-2.0 / 自有许可 … | 该素材适用的授权条款。混合型平台会标注「混合」 |
| **免费商用** | ✅ 可 / ⚠️ 部分可 / ❌ 不可 | 「部分可」＝ 仅特定合集、免费方案或附带限制 |
| **署名** | 不需要 / 需要 / 视情况 | 是否必须在作品中标注来源 |
| **需注册** | 否 / 是 / 部分 | 下载是否需要注册账号 |
| **来源地区** | US / EU / CN / Global … | 主要语言或维护方所在地区 |
| **GitHub** | 链接或 `—` | 若为开源素材项目，附仓库地址 |

> ⚠️ **「部分可」不等于随便用**。遇到 ⚠️ 请先点进去看清具体是哪一部分免费、要做什么才算合规。
> 标注 **待核实** 的条目表示调研时授权或存活性未能 100% 确认，收录前请人工复核一次。

---

## 使用姿势建议

1. **先锁场景，再挑站台** — 做 C 端投放先去 Unsplash / Pexels；做素材二次创作只用 CC0 / 博物馆典藏。
2. **下载即留证** — 重要项目把下载当天的许可页面截图存档。Pixabay 就曾在 2019 年从 CC0 改为自有授权，条款是会变的。
3. **避开人物与商标** — 可辨识人物做广告用途需另取肖像授权；素材中的 logo 不受 CC 授权保护。
4. **AI 生成内容谨慎** — 多数图库已混入 AI 生成内容，纯 AI 生成物在多数法域可能不受著作权保护。
5. **音频要查三层权利** — 一段音乐同时存在词曲、录音、表演三层权利，拿到一层 ≠ 全部拿到。
6. **字体看是 OFL 还是厂商声明** — SIL OFL 可嵌入可改可分发，但不得单独售字体文件；站酷/阿里/MiSans 等是厂商单方声明，须存档并遵守附加条件。
7. **数据集默认只给研究用途** — 含 NC / -SA 的数据集（ESC-50、UrbanSound8K 等）用于训练商业模型已超范围。
8. **绝不用素材搭素材站竞品** — 这是所有平台共通的明文禁令，也是被起诉概率最高的一条。

详见 [10 · 授权速查](docs/10-licenses.md) 与 [17 · 多媒体授权速查](docs/17-media-licenses.md)。

---

## 贡献与维护

欢迎补充新的开源 / 免费可商用素材站。提交前请阅读 [CONTRIBUTING.md](CONTRIBUTING.md)，并保持表格格式一致：

```
| 名称 | URL | 许可 | 免费商用 | 署名 | 需注册 | 地区 | 一句话特色 | GitHub |
```

协作约定：

- **双语同步**：新增或修改资源时，请同步更新对应的英文伴侣文件（`docs/XX-*.en.md`），保持中文与英文行一一对应。
- **再生数据源**：文档改完后运行 `python3 tools/build_data.py`，会自动更新 `assets/data.js`，站点随之同步——请勿手改 `assets/data.js`。
- 每个分类文档顶部都有语言切换行，修改时注意不要破坏它。

收录标准：

- ✅ 必须是**真实可访问**的站点或开源仓库（提交前请点开确认）
- ✅ 授权条款**明示**，且至少部分内容可免费商用
- ✅ 用不上的话宁缺毋滥，不要凑数
- ❌ 已关站、已转纯付费、条款不明的，请移除并在 PR 中说明原因

> 发现失效链接欢迎提 Issue。

---

## 免责声明

本仓库整理的信息截至 **2026-10**，各站点的授权条款可能随时调整。所有条目仅供参考，**不构成法律意见**。
用于商业项目前，请以该素材站点的官方许可页面原文为准；涉及重大商业利益时建议咨询法务。

---

## License

本仓库的**整理内容**（文档结构与分类体系）采用 [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) 授权，转载请注明来源。
各条目的素材本身遵循其各自平台的授权条款，请以原站点说明为准。
