> 🌐 Language: [简体中文](19-motion-animation.md) · [🇬🇧 English](19-motion-animation.en.md)

# 19 · 动效与 UI 动画（Motion & Animation）

> Lottie、动画图标、加载动效与 GIF 素材。
> **核心原则**：渲染运行时（播放器/引擎）几乎全是 MIT，风险为零；真正有风险的是**素材本身**——Lottie 文件里常夹带品牌 logo 和动漫形象。

**图例**：免费商用 ✅ 可商用 ｜ ⚠️ 部分可商用 ｜ ❌ 不可商用　·　署名：不需要 / 需要 / 视情况

| 名称 | 官网 | 许可 / License | 免费商用 | 署名 | 需注册 | 来源地区 | 一句话特色 | GitHub |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| lottie-web | https://github.com/airbnb/lottie-web | MIT | ✅ | 不需要 | 否 | US | Airbnb 官方 Lottie 网页播放器 | https://github.com/airbnb/lottie-web |
| ThorVG | https://github.com/thorvg/thorvg | MIT | ✅ | 不需要 | 否 | KR | 轻量矢量与 Lottie 渲染引擎 | https://github.com/thorvg/thorvg |
| UseAnimations | https://useanimations.com/ | MIT | ✅ | 不需要 | 否 | Global | 298 个手作动画图标，开箱可用 | https://github.com/useAnimations |
| rlottie | https://github.com/Samsung/rlottie | 三星自有开源许可 ⚠️待核实 | ✅ | 不需要 | 否 | KR | 三星 C++ Lottie 渲染库 | https://github.com/Samsung/rlottie |
| Lordicon | https://lordicon.com/ | Lordicon Free License | ✅ | 需要 | 否 | PL / EU | 免费档可商用但必须署名 | — |
| Noto Emoji Animations | https://googlefonts.github.io/noto-emoji-animation/ | Apache-2.0 / CC BY 4.0 | ✅ | 视情况 | 否 | US | Google 开源动态表情预览 ⚠️待核实 | — |
| LottieFiles | https://lottiefiles.com/ | 自有条款（免费 / Premium 混合） | ⚠️ | 视情况 | 部分 | US | 80 万+ Lottie，全球最大动画库 | — |
| IconScout | https://iconscout.com/ | 混合（免费需署名 / 付费） | ⚠️ | 需要 | 部分 | IN | 动画图标与 Lottie 混合库 | — |
| Icons8 动画图标 | https://icons8.com/animated-icons | Icons8 免费条款（须链接署名） | ⚠️ | 需要 | 部分 | US | 万级动画图标，免费档须署名 | — |
| Loading.io | https://loading.io/ | 自有条款（免费档须署名） | ⚠️ | 需要 | 部分 | Global | 加载动画与骨架屏生成器 | — |
| LottieLab | https://www.lottielab.com/ | 自有条款（免费档受限） | ⚠️ | 视情况 | 是 | US | 浏览器内 Lottie 编辑器 | — |
| SVGator | https://www.svgator.com/ | 自有条款（免费档限项目数） | ⚠️ | 视情况 | 是 | RO / EU | 免代码 SVG 动画制作工具 | — |
| Giphy | https://giphy.com/ | Giphy 条款 + 上游版权混杂 | ❌ | 视情况 | 否 | US | 最大 GIF 库，大量第三方 IP | — |
| Tenor | https://tenor.com/ | Tenor API 条款 + 上游版权混杂 | ❌ | 视情况 | 否 | US | Google 旗下 GIF 搜索引擎 ⚠️待核实 | — |

> **选型建议**
> - **要动画图标且不想署名** → UseAnimations（MIT，298 个），或自行用 Phosphor/Lucide 图标 + Lottie 渲染
> - **要量大可选** → Lordicon（免费档可商用但**必须署名**），Icons8、Loading.io 同理需署名
> - **播放器选型** → 网页用 lottie-web；追求性能或嵌入式用 ThorVG、rlottie
> - ⚠️ **LottieFiles 是混合库**：免费与付费混排，搜索结果里大量出现品牌 logo 与动漫形象的社区上传作品，这些**不属于可商用素材**，务必逐条看作者标注的 license
> - ❌ **Giphy / Tenor 按不可商用处理**：平台条款只授权「平台内分发」，完全不解决 GIF 原始素材的影视/综艺/动漫版权与肖像权。商用 GIF 建议用自有素材制作

[← 返回总目录](../README.md)
