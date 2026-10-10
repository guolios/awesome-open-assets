> 🌐 Language: [🇨🇳 简体中文](05-emoji-avatars.md) · **English**

# 05 · Emoji & Avatars (Emoji & Avatars)

> Emoji icons and placeholder avatars. **This category has the most licensing traps**—emoji artwork and code are often under two different licenses,
> and many mainstream emoji sets require paid licensing for commercial use; read carefully before shipping in products.

**Legend**: Free commercial use ✅ Commercial ｜ ⚠️ Partially commercial ｜ ❌ Non-commercial · Attribution: Not required / Required / Varies

| Name | Website | License | Commercial | Attribution | Sign-up | Region | Highlight | GitHub |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Noto Emoji | https://github.com/googlefonts/noto-emoji | Apache-2.0 | ✅ | 不需要 | 否 | US / Global | Google's official emoji with the widest coverage | https://github.com/googlefonts/noto-emoji |
| Fluent Emoji | https://github.com/microsoft/fluentui-emoji | MIT | ✅ | 不需要 | 否 | US | Microsoft 3D and flat dual-style emoji | https://github.com/microsoft/fluentui-emoji |
| DiceBear | https://www.dicebear.com | MIT | ✅ | 不需要 | 否 | DE / EU | Open-source random avatar generator with API | https://github.com/dicebear/dicebear |
| OpenMoji | https://openmoji.org | CC BY-SA 4.0 | ✅ | 需要 | 否 | DE / EU | 4700+ emoji; derivatives must use same license | https://github.com/hfg-gmuend/openmoji |
| Twemoji | https://github.com/jdecked/twemoji | 图形 CC BY 4.0 / 代码 MIT | ✅ | 需要 | 否 | US | Twitter-style emoji; artwork requires attribution | https://github.com/jdecked/twemoji |
| FxEmoji | https://github.com/mozilla/fxemoji | 图形 CC BY 4.0 | ✅ | 需要 | 否 | US | Mozilla emoji; attribution required | https://github.com/mozilla/fxemoji |
| UI Faces | https://www.uifaces.co | 页面未明确标注 | ⚠️ | 视情况 | 否 | Global | AI avatars; commercial license unconfirmed ⚠️ verify | — |
| Pravatar | https://pravatar.cc | 未明确标注 | ⚠️ | 视情况 | 否 | Global | Placeholder avatar service; license unconfirmed ⚠️ verify | — |
| JoyPixels | https://www.joypixels.com | 自有（免费版仅限个人使用） | ❌ | 需要 | 否 | US | Commercial use requires paid license; do not misuse | — |

> **Selection Guide**
> - **Use emoji artwork in a product** (not system IME) → choose **Noto Emoji** (Apache-2.0) or **Fluent Emoji** (MIT), both attribution-free and comprehensive
> - **Need fake avatars for a demo** → DiceBear, MIT with HTTP API, one URL yields one avatar
> - ⚠️ **Twemoji / FxEmoji are dual-licensed**: code is MIT, but artwork is CC BY 4.0 requiring attribution. Installing the npm package alone does not grant artwork rights
> - ⚠️ **OpenMoji is CC BY-SA** (copyleft); derivatives must be released under the same terms—evaluate before embedding in a closed-source app
> - ❌ **JoyPixels free tier explicitly forbids commercial use**; many tutorials mistakenly recommend it, so beware

[← Back to Index](../README.en.md)
