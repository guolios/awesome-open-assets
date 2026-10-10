> 🌐 Language: [简体中文](07-ai-tools-search.md) · [🇬🇧 English](07-ai-tools-search.en.md)

# 07 · AI 工具与授权搜索引擎（AI Image Tools & Search Engines）

> 两类东西混在这一篇：**① 跨平台搜 CC 授权素材的聚合搜索引擎**；**② 开源可自部署的图片生成模型与 AI 处理工具**。
> 前者是"找图效率工具"，后者是"自己造图"。注意两者关于商用的规则完全不同。

**图例**：免费商用 ✅ 可商用 ｜ ⚠️ 部分可商用 ｜ ❌ 不可商用　·　署名：不需要 / 需要 / 视情况

## 7.1 授权素材搜索引擎

| 名称 | 官网 | 许可 / License | 免费商用 | 署名 | 需注册 | 来源地区 | 一句话特色 | GitHub |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Openverse | https://openverse.org | 聚合 CC0 / CC BY / PD | ⚠️ | 视情况 | 否 | Global | 8 亿+ 开放授权素材，提供 API | https://github.com/WordPress/openverse |
| Creative Commons Search | https://search.creativecommons.org | 聚合 CC 授权 | ⚠️ | 视情况 | 否 | US | CC 官方搜索入口 | — |
| Flickr（授权筛选） | https://www.flickr.com/search/?license=2,3,4,5,6,9,10 | 混合 CC 授权 | ⚠️ | 视情况 | 部分 | US | 直接用 URL 参数按授权过滤 | — |
| Everypixel | https://www.everypixel.com | 混合（免费 + 付费） | ⚠️ | 视情况 | 否 | US / EU | AI 图库搜索，可筛免费部分 | — |
| Google Images（使用权筛选） | https://images.google.com | 混合 | ⚠️ | 视情况 | 否 | US | 用「使用权」筛选，结果须逐张确认 ⚠️待核实 | — |
| Bing Images（授权筛选） | https://www.bing.com/images | 混合 | ⚠️ | 视情况 | 否 | US | 授权筛选器，须逐张确认 ⚠️待核实 | — |

## 7.2 开源生成模型（可自部署）

| 名称 | 官网 | 许可 / License | 免费商用 | 署名 | 需注册 | 来源地区 | 一句话特色 | GitHub |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| FLUX.1 | https://blackforestlabs.ai | Apache-2.0（schnell / dev 版本） | ✅ | 不需要 | 部分 | DE / EU | 开源权重，商用最友好 | https://github.com/black-forest-labs/flux |
| Stable Diffusion（SDXL） | https://stability.ai | CreativeML Open RAIL++-M | ⚠️ | 视情况 | 部分 | UK / EU | 开源权重但附带使用限制条款 | https://github.com/Stability-AI/generative-models |

## 7.3 AI 图片处理工具（在线服务）

| 名称 | 官网 | 许可 / License | 免费商用 | 署名 | 需注册 | 来源地区 | 一句话特色 | GitHub |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Remove.bg | https://www.remove.bg | 自有（免费版仅预览尺寸） | ⚠️ | 视情况 | 是 | AT / EU | 一键去背，免费版分辨率受限 | — |
| Clipdrop | https://clipdrop.co | 自有（部分免费） | ⚠️ | 视情况 | 是 | EU | Stability AI 旗下，去背/放大/重打光 ⚠️待核实 | — |
| Upscale.media | https://www.upscale.media | 自有（部分免费） | ⚠️ | 视情况 | 是 | Global | AI 图片放大增强 ⚠️待核实 | — |
| Bing Image Creator | https://www.bing.com/images/create | Microsoft 服务条款 | ⚠️ | 视情况 | 是 | US | 生成图商用须遵守 MS 条款 ⚠️待核实 | — |

> **选型建议**
> - **找 CC 素材首选 Openverse**：它是 WordPress 维护的聚合索引，一次搜遍 Flickr、Wikimedia、博物馆 API 等数百个来源，还支持按授权类型过滤 + API 调用
> - **搜索引擎筛选出来的结果不等于授权确认**：Google / Bing 的「使用权」筛选只是读取页面上的 license 标记，误标率不低，**正式使用前必须回原站逐张确认**
> - ⚠️ **AI 生成图的著作权状态各地不同**：目前多数法域不保护纯 AI 生成物；且稳定性/wiki 图库平台已大量混入 AI 图，商用前请看清条款
> - 💡 想彻底掌控素材风险时，**自部署 FLUX.1**（Apache-2.0）比用在线服务干净得多

[← 返回总目录](../README.md)
