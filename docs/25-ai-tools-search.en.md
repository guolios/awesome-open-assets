> 🌐 Language: [🇨🇳 简体中文](25-ai-tools-search.md) · **English**

# 25 · AI Tools & Licensing Search Engines (AI Image Tools & Search Engines)

> This section mixes two kinds of tools: **① Aggregated search engines that find CC-licensed assets across platforms**; **② Open-source, self-hostable image generation models and AI processing tools**.
> The former are "image-finding efficiency tools," the latter are "build-your-own images." Note their commercial-use rules differ completely.

**Legend**: Free commercial use ✅ Commercial ｜ ⚠️ Partially commercial ｜ ❌ Non-commercial · Attribution: Not required / Required / Varies

## 7.1 Licensed Asset Search Engines

| Name | Website | License | Commercial | Attribution | Sign-up | Region | Highlight | GitHub |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Openverse | https://openverse.org | 聚合 CC0 / CC BY / PD | ⚠️ | 视情况 | 否 | Global | 800M+ open-licensed assets with API | https://github.com/WordPress/openverse |
| Creative Commons Search | https://search.creativecommons.org | 聚合 CC 授权 | ⚠️ | 视情况 | 否 | US | Official CC search portal | — |
| Flickr（授权筛选） | https://www.flickr.com/search/?license=2,3,4,5,6,9,10 | 混合 CC 授权 | ⚠️ | 视情况 | 部分 | US | Filter by license directly via URL parameters | — |
| Everypixel | https://www.everypixel.com | 混合（免费 + 付费） | ⚠️ | 视情况 | 否 | US / EU | AI image-library search with free filter | — |
| Google Images（使用权筛选） | https://images.google.com | 混合 | ⚠️ | 视情况 | 否 | US | Filter by usage rights; verify each result ⚠️ verify | — |
| Bing Images（授权筛选） | https://www.bing.com/images | 混合 | ⚠️ | 视情况 | 否 | US | License filter; verify each result ⚠️ verify | — |

## 7.2 Open-Source Generation Models (Self-Hostable)

| Name | Website | License | Commercial | Attribution | Sign-up | Region | Highlight | GitHub |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| FLUX.1 | https://blackforestlabs.ai | Apache-2.0（schnell / dev 版本） | ✅ | 不需要 | 部分 | DE / EU | Open weights, most commercial-friendly | https://github.com/black-forest-labs/flux |
| Stable Diffusion（SDXL） | https://stability.ai | CreativeML Open RAIL++-M | ⚠️ | 视情况 | 部分 | UK / EU | Open weights but with usage restrictions | https://github.com/Stability-AI/generative-models |

## 7.3 AI Image Processing Tools (Online Services)

| Name | Website | License | Commercial | Attribution | Sign-up | Region | Highlight | GitHub |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Remove.bg | https://www.remove.bg | 自有（免费版仅预览尺寸） | ⚠️ | 视情况 | 是 | AT / EU | One-click background removal, free tier size-limited | — |
| Clipdrop | https://clipdrop.co | 自有（部分免费） | ⚠️ | 视情况 | 是 | EU | Stability AI's bg/upscale/relight suite ⚠️ verify | — |
| Upscale.media | https://www.upscale.media | 自有（部分免费） | ⚠️ | 视情况 | 是 | Global | AI image upscaling & enhancement ⚠️ verify | — |
| Bing Image Creator | https://www.bing.com/images/create | Microsoft 服务条款 | ⚠️ | 视情况 | 是 | US | Commercial use must follow MS terms ⚠️ verify | — |

> **Selection Guide**
> - **For CC assets, start with Openverse**: a WordPress-maintained aggregated index searching Flickr, Wikimedia, museum APIs, etc. across hundreds of sources, with license filtering + API
> - **Search-engine results are not license confirmation**: Google/Bing "usage rights" filters only read page license tags with notable mislabel rates—**verify each item on the source site before use**
> - ⚠️ **AI-generated image copyright varies by jurisdiction**: most currently don't protect pure AI output; and stock/wiki platforms are flooded with AI images—check terms before commercial use
> - 💡 For full control of asset risk, **self-host FLUX.1** (Apache-2.0) is far cleaner than online services

[← Back to Index](../README.en.md)
