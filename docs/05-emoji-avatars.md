> 🌐 Language: [简体中文](05-emoji-avatars.md) · [🇬🇧 English](05-emoji-avatars.en.md)

# 05 · Emoji 与头像（Emoji & Avatars）

> 表情图标与占位头像。**这一类的授权陷阱最多**——Emoji 图形与代码常常是两套不同的 license，
> 而且不少主流 emoji 套件商业使用需要付费授权，务必看清楚再放进产品。

**图例**：免费商用 ✅ 可商用 ｜ ⚠️ 部分可商用 ｜ ❌ 不可商用　·　署名：不需要 / 需要 / 视情况

| 名称 | 官网 | 许可 / License | 免费商用 | 署名 | 需注册 | 来源地区 | 一句话特色 | GitHub |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Noto Emoji | https://github.com/googlefonts/noto-emoji | Apache-2.0 | ✅ | 不需要 | 否 | US / Global | Google 官方 emoji，覆盖面最广 | https://github.com/googlefonts/noto-emoji |
| Fluent Emoji | https://github.com/microsoft/fluentui-emoji | MIT | ✅ | 不需要 | 否 | US | 微软 3D 与扁平双风格 emoji | https://github.com/microsoft/fluentui-emoji |
| DiceBear | https://www.dicebear.com | MIT | ✅ | 不需要 | 否 | DE / EU | 开源随机头像生成器，提供 API | https://github.com/dicebear/dicebear |
| OpenMoji | https://openmoji.org | CC BY-SA 4.0 | ✅ | 需要 | 否 | DE / EU | 4700+ emoji，衍生作品须同授权 | https://github.com/hfg-gmuend/openmoji |
| Twemoji | https://github.com/jdecked/twemoji | 图形 CC BY 4.0 / 代码 MIT | ✅ | 需要 | 否 | US | Twitter 风格 emoji，图形须署名 | https://github.com/jdecked/twemoji |
| FxEmoji | https://github.com/mozilla/fxemoji | 图形 CC BY 4.0 | ✅ | 需要 | 否 | US | Mozilla 出品 emoji，须署名 | https://github.com/mozilla/fxemoji |
| UI Faces | https://www.uifaces.co | 页面未明确标注 | ⚠️ | 视情况 | 否 | Global | AI 头像，商用授权待确认 ⚠️待核实 | — |
| Pravatar | https://pravatar.cc | 未明确标注 | ⚠️ | 视情况 | 否 | Global | 占位头像服务，授权待确认 ⚠️待核实 | — |
| JoyPixels | https://www.joypixels.com | 自有（免费版仅限个人使用） | ❌ | 需要 | 否 | US | 商用须付费授权，切勿误用 | — |

> **选型建议**
> - **产品里要用 emoji 图形**（不是调用系统输入法）→ 选 **Noto Emoji**（Apache-2.0）或 **Fluent Emoji**（MIT），免署名且覆盖全
> - **做 Demo 需要假头像** → DiceBear，MIT 且提供 HTTP API，一行 URL 出一张
> - ⚠️ **Twemoji / FxEmoji 是双许可**：代码 MIT，但图形部分 CC BY 4.0 要署名。只装 npm 包不等于获得图形授权
> - ⚠️ **OpenMoji 是 CC BY-SA**（传染性），衍生作品须以相同条款开放，嵌入闭源 App 前要评估
> - ❌ **JoyPixels 免费版明确禁止商用**，很多教程会误推荐它，务必注意

[← 返回总目录](../README.md)
