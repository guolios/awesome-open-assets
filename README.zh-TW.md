<p align="center">
  <a href="README.md">簡體中文</a> ·
  <a href="README.zh-TW.md"><b>繁體中文</b></a> ·
  <a href="README.en.md">English</a>
</p>

<p align="center">
  <img alt="License" src="https://img.shields.io/badge/license-CC%20BY%204.0-blue">
  <img alt="Resources" src="https://img.shields.io/badge/resources-392-blue">
  <img alt="Languages" src="https://img.shields.io/badge/languages-zh--CN%20%7C%20zh--TW%20%7C%20en-informational">
  <img alt="Updated" src="https://img.shields.io/badge/updated-2026--10-success">
</p>

# Awesome Open Assets · 開源素材資源導航

> 🌏 全球開源 / 免費可商用素材資源的分類索引 — Curated index of openly-licensed assets for creators & developers.
> 逐條標註**許可條款、可否商用、是否需署名**，拿來就能用，不用擔心版權地雷。

**收錄規模**：**392 個站點 / 專案**（01–17 類）+ 2 篇授權速查 ｜ **更新時間**：2026-10 ｜ **維護狀態**：持續更新中

覆蓋 **圖片 · 影片 · 音訊 · 字型 · 動效 · 3D · 遊戲美術 · 配色 · 工具鏈** 九大領域。

## 目錄導航

- [為什麼叫這個名字](#為什麼叫這個名字)
- [快速推薦（按場景速查）](#快速推薦按場景速查)
- [分類目錄](#分類目錄)
- [表格欄位說明](#表格欄位說明)
- [使用姿勢建議](#使用姿勢建議)
- [貢獻與維護](#貢獻與維護)
- [免責宣告](#免責宣告)
- [License](#license)

---

## 為什麼叫這個名字

這個倉庫是**長期使用的素材資源臺賬**，所以命名刻意保留了擴充套件空間：

| 維度 | 設計考慮 |
| --- | --- |
| `assets` 而非 `images` | 未來可以平滑擴充套件到字型、音效、影片、配色、設計系統檔案等，不必改名或遷倉 |
| `open` 而非 `free` | 強調**授權明確可商用**，而不只是"不要錢的圖" |
| `awesome-` 字首 | GitHub 生態約定俗成 discovery 型倉庫字首，別人搜得到、一看就懂用途 |

> 一句話定位：**素材界的 Awesome List，中文優先，但資源站以全球為主。**

> ✅ 這個命名已經兌現過一次：倉庫最初只有圖片類（150 條），如今影片、音訊、字型、動效、配色、工具鏈全部併入同一套分類與欄位體系，
> **倉庫名、Description、目錄結構一個字都沒改** —— 這就是當初不用 `awesome-free-images` 的原因。

---

## 快速推薦（按場景速查）

| 我想… | 直接去這裡 | 理由 |
| --- | --- | --- |
| 找一張能直接放進 PPT / 落地頁的照片 | [Unsplash](https://unsplash.com) · [Pexels](https://www.pexels.com) | 質量最高，免署名，禁售原圖而已 |
| 找一張**授權最乾淨**（CC0）的圖 | [StockSnap](https://stocksnap.io) · [Negative Space](https://negativespace.co) · [Pixnio](https://pixnio.com) | 全站 CC0，等同於放棄著作權 |
| 找一段能直接剪進片子的影片 | [Pexels Videos](https://www.pexels.com/videos/) · [Coverr](https://coverr.co/) · [Mixkit](https://mixkit.co/free-stock-video/) | 免署名，4K 為主，唯一禁令是不得打包轉售 |
| 找一段配樂或音效 | [Pixabay Music](https://pixabay.com/music/) · [Mixkit Music](https://mixkit.co/free-stock-music/) · [Freesound](https://freesound.org/) | 前兩個免署名；Freesound 記得用 License 過濾掉 NC |
| 找一支能商用的字型 | [Google Fonts](https://fonts.google.com/) · [思源黑體](https://github.com/adobe-fonts/source-han-sans) · [霞鶩文楷](https://github.com/lxgw/LxgwWenKai) | SIL OFL 1.1，可嵌入、可改、免署名 |
| 找一支能商用的**中文**字型 | [阿里巴巴普惠體 3.0](https://www.alibabafonts.com/) · [站酷 8 款](https://www.zcool.com.cn/special/zcoolfonts/) · [得意黑](https://github.com/atelier-anchor/smiley-sans) | OFL 或廠商明示免費商用，注意站酷禁改名 |
| 找蒙古文 / 藏文 / 梵文 / 阿拉伯文等多語種字型 | [Noto Fonts](https://fonts.google.com/noto) · [BabelStone](https://babelstone.co.uk/Fonts/) · [SIL 字型庫](https://software.sil.org/fonts/) | 多語支系多為 OFL；注意豎排蒙古文與 RTL 文字方向 |
| 給頁面加動畫 / Lottie | [lottie-web](https://github.com/airbnb/lottie-web) · [UseAnimations](https://useanimations.com/) · [Lordicon](https://lordicon.com/) | 執行時全 MIT；Lordicon 免費檔可商用但須署名 |
| 找歷史 / 航天 / 政府影像 | [NASA Images](https://images.nasa.gov) · [美國國家檔案館](https://catalog.archives.gov/) · [Internet Archive](https://archive.org/details/movies) | 多為公有領域，但須看單條 Rights Statement |
| 給專案配圖示 | [Lucide](https://lucide.dev) · [Tabler Icons](https://tabler.io/icons) · [Iconify](https://iconify.design) | MIT / ISC，1700–6200+ 圖示，免署名 |
| 找扁平風插畫 | [unDraw](https://undraw.co) · [Mixkit](https://mixkit.co) · [Open Peeps](https://www.openpeeps.com) | 可實時改主色，免署名可用 |
| 做 3D / 渲染要貼圖 HDRI | [Poly Haven](https://polyhaven.com) · [ambientCG](https://ambientcg.com) | 全站 CC0，PBR 材質最全 |
| 做遊戲原型要美術資源 | [Kenney](https://kenney.nl/assets) · [OpenGameArt](https://opengameart.org) · [Quaternius](https://quaternius.com) | Kenney 全 CC0 最省心 |
| 一次搜遍所有 CC 授權素材 | [Openverse](https://openverse.org) | 聚合 8 億+ 條，提供 API |
| 需要壓縮 / 轉碼 / 建圖床 | [sharp](https://sharp.pixelplumbing.com) · [Squoosh](https://squoosh.app) · [imgproxy](https://imgproxy.net) | 均為開源專案，商用無成本 |

---

## 分類目錄

### 📷 圖片與視覺（01–10，共 150 條）

| # | 分類 | 檔案 | 條目數 |
| --- | --- | --- | --- |
| 01 | 綜合免費相簿 Stock Photos | [docs/01-stock-photos.md](docs/01-stock-photos.md) | 26 |
| 02 | 公共領域與機構典藏 Public Domain | [docs/02-public-domain.md](docs/02-public-domain.md) | 19 |
| 03 | 向量圖與插畫 Vector & Illustration | [docs/03-vector-illustration.md](docs/03-vector-illustration.md) | 15 |
| 04 | 圖示資源 Icons | [docs/04-icons.md](docs/04-icons.md) | 18 |
| 05 | 3D / 貼圖 / HDRI 與紋理 3D & Textures | [docs/05-3d-textures-hdri.md](docs/05-3d-textures-hdri.md) | 11 |
| 06 | Emoji 與頭像 Emoji & Avatars | [docs/06-emoji-avatars.md](docs/06-emoji-avatars.md) | 9 |
| 07 | AI 工具與授權搜尋引擎 AI & Search | [docs/07-ai-tools-search.md](docs/07-ai-tools-search.md) | 12 |
| 08 | 畫素風與遊戲美術 Pixel Art & Game Assets | [docs/08-pixel-game-assets.md](docs/08-pixel-game-assets.md) | 12 |
| 09 | 圖片處理與最佳化工具 Processing & Tooling | [docs/09-image-tooling.md](docs/09-image-tooling.md) | 14 |
| 10 | 📕 授權速查與常見坑 License Basics | [docs/10-licenses.md](docs/10-licenses.md) | 14 |

### 🎬 多媒體（11–17，其中 11–16 共 242 條，17 為授權知識篇）

| # | 分類 | 檔案 | 條目數 |
| --- | --- | --- | --- |
| 11 | 開源影片素材 Video Footage | [docs/11-video-footage.md](docs/11-video-footage.md) | 23 |
| 12 | 開源音訊與音樂 Audio, Music & SFX | [docs/12-audio-music-sfx.md](docs/12-audio-music-sfx.md) | 28 |
| 13 | 開源字型 Fonts（含英/中/少數民族/梵文/泰文/阿拉伯/西里爾等） | [docs/13-fonts.md](docs/13-fonts.md) | 139 |
| 14 | 動效與 UI 動畫 Motion & Animation | [docs/14-motion-animation.md](docs/14-motion-animation.md) | 14 |
| 15 | 配色 / 漸變 / 背景生成器 Colors & Generators | [docs/15-colors-generators.md](docs/15-colors-generators.md) | 22 |
| 16 | 音影片處理開源工具 Media Tooling | [docs/16-media-tooling.md](docs/16-media-tooling.md) | 16 |
| 17 | 📕 多媒體授權速查與常見坑 Media License Basics | [docs/17-media-licenses.md](docs/17-media-licenses.md) | — |

> 10 與 17 是**授權知識篇**（條款速查 + 避坑清單），不計入資源條目數。
> 10 講通用條款（CC / MIT / OFL / Apache 等），17 講多媒體領域特有的雷區（權利分層、字型舉證、Lottie 第三方 IP 等）。

---

## 表格欄位說明（所有分類檔案通用）

| 欄位 | 取值 | 含義 |
| --- | --- | --- |
| **許可 / License** | CC0 / MIT / Apache-2.0 / 自有許可 … | 該素材適用的授權條款。混合型平臺會標註「混合」 |
| **免費商用** | ✅ 可 / ⚠️ 部分可 / ❌ 不可 | 「部分可」＝ 僅特定合集、免費方案或附帶限制 |
| **署名** | 不需要 / 需要 / 視情況 | 是否必須在作品中標註來源 |
| **需註冊** | 否 / 是 / 部分 | 下載是否需要註冊賬號 |
| **來源地區** | US / EU / CN / Global … | 主要語言或維護方所在地區 |
| **GitHub** | 連結或 `—` | 若為開源素材專案，附倉庫地址 |

> ⚠️ **「部分可」不等於隨便用**。遇到 ⚠️ 請先點進去看清具體是哪一部分免費、要做什麼才算合規。
> 標註 **待核實** 的條目表示調研時授權或存活性未能 100% 確認，收錄前請人工複核一次。

---

## 使用姿勢建議

1. **先鎖場景，再挑站臺** — 做 C 端投放先去 Unsplash / Pexels；做素材二次創作只用 CC0 / 博物館典藏。
2. **下載即留證** — 重要專案把下載當天的許可頁面截圖存檔。Pixabay 就曾在 2019 年從 CC0 改為自有授權，條款是會變的。
3. **避開人物與商標** — 可辨識人物做廣告用途需另取肖像授權；素材中的 logo 不受 CC 授權保護。
4. **AI 生成內容謹慎** — 多數相簿已混入 AI 生成內容，純 AI 生成物在多數法域可能不受著作權保護。
5. **音訊要查三層權利** — 一段音樂同時存在詞曲、錄音、表演三層權利，拿到一層 ≠ 全部拿到。
6. **字型看是 OFL 還是廠商宣告** — SIL OFL 可嵌入可改可分發，但不得單獨售字型檔案；站酷/阿里/MiSans 等是廠商單方宣告，須存檔並遵守附加條件。
7. **資料集預設只給研究用途** — 含 NC / -SA 的資料集（ESC-50、UrbanSound8K 等）用於訓練商業模型已超範圍。
8. **絕不用素材搭素材站競品** — 這是所有平臺共通的明文禁令，也是被起訴機率最高的一條。

詳見 [10 · 授權速查](docs/10-licenses.md) 與 [17 · 多媒體授權速查](docs/17-media-licenses.md)。

---

## 貢獻與維護

歡迎補充新的開源 / 免費可商用素材站。提交前請閱讀 [CONTRIBUTING.md](CONTRIBUTING.md)，並保持表格格式一致：

```
| 名稱 | URL | 許可 | 免費商用 | 署名 | 需註冊 | 地區 | 一句話特色 | GitHub |
```

收錄標準：

- ✅ 必須是**真實可訪問**的站點或開源倉庫（提交前請點開確認）
- ✅ 授權條款**明示**，且至少部分內容可免費商用
- ✅ 用不上的話寧缺毋濫，不要湊數
- ❌ 已關站、已轉純付費、條款不明的，請移除並在 PR 中說明原因

> 發現失效連結歡迎提 Issue。

---

## 免責宣告

本倉庫整理的資訊截至 **2026-10**，各站點的授權條款可能隨時調整。所有條目僅供參考，**不構成法律意見**。
用於商業專案前，請以該素材站點的官方許可頁面原文為準；涉及重大商業利益時建議諮詢法務。

---

## License

本倉庫的**整理內容**（文件結構與分類體系）採用 [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) 授權，轉載請註明來源。
各條目的素材本身遵循其各自平臺的授權條款，請以原站點說明為準。
