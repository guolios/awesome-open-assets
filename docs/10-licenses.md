> 🌐 Language: [简体中文](10-licenses.md) · [🇬🇧 English](10-licenses.en.md)

# 10 · 授权速查与常见坑（License Basics）

> 这是整个仓库最该先读的一篇。**"免费下载"≠"可以商用"≠"可以不署名"**，三件事互不相等。
> 收录条款本身 + 8 条实操避坑清单。

## 10.1 常见授权条款速查

| 条款 | 官方说明 | 免费商用 | 署名 | 地区 | 适用性 / 常见坑 |
| --- | --- | --- | --- | --- | --- |
| CC0 1.0 Universal | https://creativecommons.org/publicdomain/zero/1.0/ | ✅ | 不需要 | Global | 完全放弃著作权，商用免署名，最省心 |
| CC BY 4.0 | https://creativecommons.org/licenses/by/4.0/ | ✅ | 需要 | Global | 可商用可修改，但必须署名来源 |
| CC BY-SA 4.0 | https://creativecommons.org/licenses/by-sa/4.0/ | ✅ | 需要 | Global | 署名 + 衍生作品须以相同条款开放（传染性） |
| CC BY-NC 4.0 | https://creativecommons.org/licenses/by-nc/4.0/ | ❌ | 需要 | Global | 禁止商业使用，别用在商业项目里 |
| CC BY-ND 4.0 | https://creativecommons.org/licenses/by-nd/4.0/ | ⚠️ | 需要 | Global | 不得修改，仅可原样分发 |
| Public Domain Mark 1.0 | https://creativecommons.org/publicdomain/mark/1.0/ | ✅ | 不需要 | Global | 标记已知越过版权期的作品 |
| Unsplash License | https://unsplash.com/license | ✅ | 不需要 | US | 自家条款，禁售未修改原图、禁做竞品图库 |
| Pexels License | https://www.pexels.com/license/ | ✅ | 不需要 | Global | 禁售原图、禁暗示人物代言、禁作商标使用 |
| Pixabay Content License | https://pixabay.com/service/license/ | ✅ | 不需要 | EU | 赞助内容（Sponsored）不适用 |
| SIL OFL 1.1 | https://openfontlicense.org/ | ✅ | 不需要 | Global | 字体可嵌入商用，但不得单独售卖字体文件 |
| MIT License | https://opensource.org/licenses/MIT | ✅ | 不需要 | Global | 开源素材项目最常见，保留声明即可 |
| Apache-2.0 | https://www.apache.org/licenses/LICENSE-2.0 | ✅ | 不需要 | Global | 含专利授权，商用友好 |
| GPL-3.0 | https://www.gnu.org/licenses/gpl-3.0.html | ✅ | 不需要 | Global | 具传染性，分发软件须同条款开源 |
| 可辨识人物与肖像权 | https://commons.wikimedia.org/wiki/Commons:Photographs_of_identifiable_people | ⚠️ | 视情况 | Global | 商用广告用途另需肖像授权书 |

## 10.2 八个实操坑（按踩雷概率排序）

**1 · 二次分发与转售**
Unsplash / Pexels / Pixabay 都禁止「原样转售」——把图印成海报、马克杯卖，或打包成自己的图库产品，统统不行。VectorPortal 则明文禁止二次分发素材本身。

**2 · 混合授权平台的地雷**
Wikimedia Commons、OpenGameArt、Sketchfab、itch.io、Europeana 都是**混合授权平台**：同一站内每个素材的条款可能完全不同，必须逐件点开看右下角/侧边的 license 标记。

**3 · CC BY-SA 的传染性**
OpenMoji、Liberated Pixel Cup 属于 SA 条款。**衍生作品需要以相同条款释出**，打算嵌进闭源商业产品之前一定要先评估。

**4 · 商标与品牌不受 CC 保护**
素材里出现的商标、logo 不在 CC 授权覆盖范围内。拿去暗示品牌代言、或注册成自家商标都会踩雷——Pexels License 就明文禁止把素材当作商标使用。Simple Icons 里全是品牌 icon，同理。

**5 · 肖像权与物权**
出现可辨识人脸的照片，只要用于广告、包装、代言性质，就**另需 Model Release 肖像授权书**（这是独立于著作权之外的权利）。私人建筑、当代艺术品、宠物也可能有额外权利。

**6 · AI 生成图的不确定性**
Unsplash / Pexels / Pixabay 上已大量混入 AI 生成图。**纯 AI 生成物在多数法域目前可能不受著作权保护**，意味着你也很难主张独占。商用前务必确认平台条款。

**7 · 敏感用途禁令**
不得把人物素材用于诽谤、歧视、色情或令人反感的情境——这是几乎所有自有许可的共通禁令，违反会直接导致授权终止。

**8 · 授权是会变的**
Pixabay 在 2019 年从 CC0 改成自有授权，Reshot 直接被 Envato 关停。**重要 commercial 项目请保留下载当天的许可页面快照**（截图 + 存档链接），以便日后举证。

## 10.3 一页纸决策流程

```
拿到一张图
  ├─ 来源是明确 CC0 / Public Domain？        → 直接用，随心所欲
  ├─ 来源是 CC BY / 须署名的自有许可？       → 用，但务必在产品里标注作者 + 来源链接
  ├─ 来源是 CC BY-SA？                       → 衍生作品须同条款开放，闭源产品要评估
  ├─ 来源是 CC BY-NC？                       → 商业项目直接放弃，另找替代
  └─ 图片里有没有清晰人脸 / 品牌商标？       → 有则另需肖像授权 + 避免暗示代言
```

> ⚠️ **免责声明**：本篇内容整理于 2026-10，仅供参考，**不构成法律意见**。涉及重大商业利益时请咨询专业法务，并以素材站官方许可页面原文为准。

[← 返回总目录](../README.md)
