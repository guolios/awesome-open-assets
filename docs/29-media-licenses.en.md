> 🌐 Language: [🇨🇳 简体中文](29-media-licenses.md) · **English**

# 29 · Media License Quick Reference & Common Pitfalls (Media License Basics)

> Video, audio, fonts and motion graphics each have their own pitfalls. This page pairs with [10 · License Quick Reference](10-licenses.md):
> **10 covers general terms (CC / MIT / OFL, etc.); 17 covers the minefields specific to media.**
> In one line: images trip over "license type", audio/video trip over "layered rights", and fonts trip over "software vs. glyph design".

---

## 17.1 Audio

**① Three layers of rights are independent**
A pop song simultaneously has: **lyrics & composition copyright** (musical work), **sound recording rights** (master), and **performer's rights** (singing/playing). Holding one layer ≠ holding all of them.
Typical trap: public-domain lyrics with a new recording, or public-domain sheet music with a non-PD recording — both are "half public domain".

**② "Royalty-Free" ≠ free, ≠ unrestricted**
RF only means "no per-use royalty"; most still require a one-time fee or subscription, and often exclude broadcasting, theatrical release, and in-game embedding.

**③ Three rules of the YouTube Audio Library**
- Some tracks explicitly require the attribution text in the video description, and **each attribution text is valid for only one video**
- The license is fundamentally tied to YouTube's platform terms; a terms change or track takedown (very common) directly breaks the evidence chain for your past projects
- Cannot be re-distributed on its own, and cannot be claimed as Content ID

**④ NCS (NoCopyrightSounds) is not public domain**
It is copyright-protected music; the author simply opens it for free use by creators. NCS explicitly forbids bundling tracks into an asset library and requires checking terms per track.
Likewise, "free / no-copyright, OK for commercial use" written on a webpage is almost never true — always go back to the source for the original terms.

**⑤ AI-generated music / SFX**
Most platforms' free tiers do not grant commercial rights; even paid tiers may keep restrictions like "cannot be sold as an asset pack" or "cannot be used for re-training". Worse — **pure AI audio is usually not copyright-protected**, meaning you also can't easily stop others from using it verbatim.

**⑥ Sample / sampling licenses are bound to "final use"**
Cannot be resold as a sample pack, nor turned into a sound-effect app or asset site.
Several SFX sites (ZapSplat, SampleFocus, Coverr) now explicitly state "**prohibited for training or evaluating any AI/ML model**" — check each site individually when building datasets/training.

**⑦ CC BY-NC is a danger zone**
Freesound, ccMixter and FMA all mix in large amounts of NC tracks. Whether "a YouTube video with ads counts as commercial" is generally treated as yes; the risk falls on the user. **Use the License filter (CC0/CC BY) when searching; don't trust the default results.**

---

## 17.2 Video

**⑧ Archive material is "per-item licensed", not "whole-site licensed"**
British Pathé and AP Archive's educational/preview licenses are separate from their commercial licenses; the Library of Congress and Internet Archive carry many items marked "copyright status unknown". Read each item's Rights Statement before downloading, not the site's slogans.

**⑨ "Government work = public domain" only holds in specific jurisdictions**
US federal government works are PD in the US, but NASA/NOAA footage may mix in third-party shots or portrait-rights-constrained clips; UK Crown Copyright and many EU government works usually require attribution under open-government licenses. Don't apply the same conclusion across borders.

**⑩ Portrait, trademark and property rights are NOT waived by CC0**
Pexels, Pixabay, Coverr and ISO Republic all explicitly state they "do not guarantee model releases / do not guarantee trademark and private-property authorization". When recognizable faces, brand logos, private sculptures or landmark buildings appear, commercial projects need separate authorization.

**⑪ Research datasets are licensed for "research" by default**
ESC-50, UrbanSound8K (NC-SA), MTG Jamendo (tracks are CC, commercial needs separate negotiation), AudioSet (body is YouTube IDs, bound by YouTube terms) are all unfit to feed directly into commercial products.
**"Train on a dataset → commercialize the trained model" often exceeds the license scope.**

**⑫ Don't use assets to build a competitor of the asset site**
Pexels, Pixabay, Coverr, Vecteezy and ZapSplat all forbid using downloaded assets (even lightly edited) to build asset libraries, template sites, or paid app bundles. **This is the single highest-litigation-risk rule.**

---

## 17.3 Fonts

**⑬ The boundaries of SIL OFL: embeddable, modifiable, distributable — but you may not sell the font files alone**

OFL allows: free commercial use (print, web, apps, logos, products shipped for sale), modification and subsetting, distribution with your product, no attribution.

The three things OFL **does not allow** are exactly the easiest to misstep on:

| Prohibition | Meaning |
| --- | --- |
| No selling font files on their own | Packaging `Inter.woff2` as a "font asset pack" for money, or making a paid app centered on the font, both violate OFL. **Selling "a work that uses the font" is allowed; selling "the font file itself" is forbidden** |
| RFN (Reserved Font Name) | Modified and redistributed versions must use a **different name** (not still "Roboto"), and derivatives must keep using OFL |
| No removing embedded notices | The copyright and license text inside the font file must not be removed |

**⑭ Font license ≠ glyph copyright — recognition varies greatly by country**

| Jurisdiction | Tendency |
| --- | --- |
| China | Case law tends to treat original single glyphs / font libraries as artistic works; **companies have been ruled liable for using a few glyphs from someone else's font on packaging**. Chinese fonts are the highest-risk asset class in China |
| US | The font **software** is copyright-protected, but pure glyph designs usually are not recognized as copyrightable works, so they are licensed as "software licenses" |
| Some European countries | Have dedicated, looser or stricter rules for typeface design |

> Conclusion: **For cross-border projects, comply with the strictest jurisdiction (usually China or the brand owner's country).**

**⑮ The burden of proof for Chinese fonts' "free for commercial use" statements**
ZCOOL, Alibaba PuHuiTi, MiSans, OPPO Sans, HarmonyOS Sans and DingTalk JinbuTi **are not open-source licenses** but unilateral vendor declarations — **which can be modified or revoked.**

Before commercial use, do three things: **① download from the official channel; ② screenshot-archive the official declaration page (with URL and date); ③ keep the download source.**

Each vendor's extra conditions differ — read them line by line:

| Font | Key restrictions |
| --- | --- |
| ZCOOL series | Forbids renaming, forbids reselling for profit, forbids delivering font files to clients (a "brand public-welfare license", far stricter than OFL) |
| Alibaba PuHuiTi 3.0 | Forbids decompiling, forbids removing legal notices, forbids standalone pricing/sale/rental/re-licensing, forbids publishing misleading partnership endorsements |
| MiSans | Requires explicitly crediting "MiSans" in the software; forbids adaptation/secondary development, forbids standalone external distribution of the font software |
| OPPO Sans | No adaptation or secondary development; no external sale |

> ⚠️ **Trademark registration is a high-risk zone for every vendor's declaration** — attitudes toward "using a font to register a trademark/logo" differ, so confirm separately before registering.

**⑯ Brand fonts and system-bundled fonts are not freely commercializable**

- **Microsoft YaHei**: copyright belongs to Founder; the Windows license only covers "display on Windows" — `@font-face` web embedding or further commercial release needs separate authorization
- **PingFang / San Francisco**: Apple's license is limited to development on Apple platforms
- **Founder, Hanyi, Makefont (造字工房)** and other commercial fonts: most need paid licenses; "free downloads" circulating online are almost always pirated

> **One-line principle: "bundled with your computer" ≠ "commercially usable"; "downloadable" ≠ "licensed".**

**⑰ Technical red lines for embedding and distribution**
- Self-hosting a font via `@font-face` is a **distribution act**. OFL allows it but requires bundling the license and copyright notice (in practice, put the LICENSE in the font directory or a site credits page)
- Subsetting is a modification; OFL allows it, but you must keep the copyright notice and obey RFN rules
- Loading via the Google Fonts CDN sends visitor IPs to Google — a **privacy-compliance (GDPR)** issue, not a licensing one; EU projects often switch to self-hosting

---

## 17.4 Motion & Generators

**⑱ GIFs / emoji contain large amounts of third-party IP**
Most GIFs on Giphy and Tenor are clipped from films, shows, anime, sports or celebrities; the platform terms only cover "distribution within the platform" and **do nothing about upstream copyright and portrait rights**. Emoji packs are the same: Noto Emoji's **glyphs** are OFL open-source, but each platform's (Apple / WeChat / Douyin) emoji **imagery** is its own work and cannot be copied directly.

**⑲ Lottie "free" ≠ "free for commercial use", and free tiers generally require attribution**
Lordicon's free tier is commercial-usable but **must be attributed**, and forbids bundled distribution and icon-centric products; Icons8 and Loading.io likewise require attribution; IconScout / LottieFiles are mixed libraries where you must check each author's marking.
Lottie files often embed third-party illustrations, brand logos or anime characters — **these are absolutely not commercializable.**
> At the runtime level (lottie-web / ThorVG / rlottie) the code is MIT or its own open-source license and is fine to use; the risk is in **the assets themselves**.

**⑳ Generator outputs: commercial-usable, but resale and competitor-building are generally forbidden**
Haikei, Fffuel, BGJar, Blobmaker, Get Waves and Shape Divider have near-identical terms: outputs are commercial-usable (BGJar's free tier requires CC BY 4.0 attribution), but **packaging outputs into asset packs/templates for resale is forbidden, as is building a competing service with them**.
Also: generator-produced SVGs are mostly algorithmic random results with **high collision rates** — unfit as a brand's sole visual identity.

---

## 17.5 General (Three Top-Priority Rules)

1. **Always keep evidence when downloading** — no matter how clean the license, automated Content ID can misjudge. Save download time, source URL, the License screenshot at the time, and the author name; this is your only self-defense material in a takedown dispute.
2. **The legal boundary of yt-dlp** — the tool itself is open-source and legal, but downloading copyrighted content and circumventing technical protection measures is illegal or violates platform terms in most jurisdictions; mind each country's "anti-circumvention" differences.
3. **Terms change** — Pixabay moved from CC0 to its own license in 2019, Reshot was shut down by Envato, and ZCOOL/Alibaba vendor declarations can be modified. **For important projects, keep a snapshot of the license page from the download day.**

---

## 17.6 One-Page Decision Flow

```
Have an audio / video clip / a font
  ├─ Audio: did you get all three layers of rights (composition + recording + performance)?
  │      └─ Only one layer → treat as unusable
  ├─ Video: any recognizable face / brand logo / private landmark in the clip?
  │      └─ Yes → need portrait license too, and avoid implying endorsement
  ├─ Font: is it SIL OFL / Apache open-source, or a unilateral vendor declaration?
  │      ├─ OFL → commercial/modifiable/distributable, but no selling font files alone, rename on modification
  │      └─ Vendor declaration → archive the declaration page + obey its extra conditions (no rename / no re-distribution / must credit)
  ├─ Dataset: does the license include NC / -SA / research-only?
  │      └─ Yes → commercial model training is out of scope
  └─ General: will you use the assets to build an asset-library / template-site competitor?
         └─ Yes → almost every platform explicitly forbids it; highest risk
```

> ⚠️ **Disclaimer**: This page was compiled in 2026-10 for reference only and **does not constitute legal advice**. For significant commercial interests, consult a qualified legal professional and rely on the asset site's official license page as the source of truth.

[← Back to Index](../README.en.md)
