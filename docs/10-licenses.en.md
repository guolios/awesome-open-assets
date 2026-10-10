> 🌐 Language: [🇨🇳 简体中文](10-licenses.md) · **English**

# 10 · License Quick Reference & Common Pitfalls（License Basics）

> This is the most important page to read first in the whole repo. **"Free to download" ≠ "free to use commercially" ≠ "free to use without attribution"** — the three are not equivalent.
> It covers the license terms themselves plus an 8-item practical pitfalls checklist.

## 10.1 Common License Terms Quick Reference

| Name | Website | License | Commercial | Attribution | Sign-up | Region | Highlight | GitHub |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| CC0 1.0 Universal | https://creativecommons.org/publicdomain/zero/1.0/ | — | ✅ | Not required | — | Global | Fully waives copyright; commercial use without attribution, most hassle-free | — |
| CC BY 4.0 | https://creativecommons.org/licenses/by/4.0/ | — | ✅ | Required | — | Global | Commercial use and modification allowed, but source must be attributed | — |
| CC BY-SA 4.0 | https://creativecommons.org/licenses/by-sa/4.0/ | — | ✅ | Required | — | Global | Attribution + derivatives must be released under the same license (copyleft) | — |
| CC BY-NC 4.0 | https://creativecommons.org/licenses/by-nc/4.0/ | — | ❌ | Required | — | Global | Non-commercial only; do not use in commercial projects | — |
| CC BY-ND 4.0 | https://creativecommons.org/licenses/by-nd/4.0/ | — | ⚠️ | Required | — | Global | No modifications allowed; distribution only in original form | — |
| Public Domain Mark 1.0 | https://creativecommons.org/publicdomain/mark/1.0/ | — | ✅ | Not required | — | Global | Marks works known to be beyond copyright term | — |
| Unsplash License | https://unsplash.com/license | — | ✅ | Not required | — | US | Its own terms; reselling unmodified originals and competing image libraries forbidden | — |
| Pexels License | https://www.pexels.com/license/ | — | ✅ | Not required | — | Global | Reselling originals, implying endorsement, and trademark use forbidden | — |
| Pixabay Content License | https://pixabay.com/service/license/ | — | ✅ | Not required | — | EU | Sponsored content not covered | — |
| SIL OFL 1.1 | https://openfontlicense.org/ | — | ✅ | Not required | — | Global | Fonts embeddable in commercial use, but font files may not be sold separately | — |
| MIT License | https://opensource.org/licenses/MIT | — | ✅ | Not required | — | Global | Most common for open-source asset projects; keep the notice | — |
| Apache-2.0 | https://www.apache.org/licenses/LICENSE-2.0 | — | ✅ | Not required | — | Global | Includes patent grant; commercial-friendly | — |
| GPL-3.0 | https://www.gnu.org/licenses/gpl-3.0.html | — | ✅ | Not required | — | Global | Copyleft; distributed software must be open-sourced under the same terms | — |
| 可辨识人物与肖像权 | https://commons.wikimedia.org/wiki/Commons:Photographs_of_identifiable_people | — | ⚠️ | Varies | — | Global | Commercial or advertising use requires a separate model release | — |

## 10.2 Eight Practical Pitfalls (Ranked by Likelihood)

**1 · Redistribution and Resale**
Unsplash / Pexels / Pixabay all forbid "reselling as-is" — printing images on posters or mugs to sell, or bundling them into your own stock product, is not allowed. VectorPortal explicitly forbids redistributing the assets themselves.

**2 · Landmines on Mixed-License Platforms**
Wikimedia Commons, OpenGameArt, Sketchfab, itch.io, and Europeana are all **mixed-license platforms**: each asset on the same site may have completely different terms, so you must open each item and check its license mark in the corner or sidebar.

**3 · Copyleft of CC BY-SA**
OpenMoji and Liberated Pixel Cup are under SA terms. **Derivative works must be released under the same license**, so evaluate carefully before embedding into a closed-source commercial product.

**4 · Trademarks and Brands Are Not Covered by CC**
Trademarks and logos appearing in assets are outside CC coverage. Using them to imply brand endorsement or registering them as your own trademark will get you in trouble — the Pexels License explicitly forbids using assets as trademarks. Simple Icons contains only brand icons, same principle.

**5 · Portrait and Property Rights**
Photos with identifiable faces, when used for advertising, packaging, or endorsement, **require a separate Model Release** (a right independent of copyright). Private buildings, contemporary artworks, and pets may also carry additional rights.

**6 · Uncertainty of AI-Generated Images**
Unsplash / Pexels / Pixabay now contain large amounts of AI-generated images. **Pure AI-generated works may not be protected by copyright in most jurisdictions** today, which means you can hardly claim exclusivity either. Always confirm the platform terms before commercial use.

**7 · Sensitive-Use Prohibitions**
Never use people's images for defamatory, discriminatory, pornographic, or otherwise objectionable contexts — this is a common prohibition in nearly all custom licenses, and violation can terminate the license outright.

**8 · Licenses Can Change**
Pixabay switched from CC0 to its own license in 2019, and Reshot was shut down by Envato outright. **For important commercial projects, keep a snapshot of the license page from the day you downloaded** (screenshot + archived link) to evidence it later.

## 10.3 One-Page Decision Flow

```
Got an image
  ├─ Source is clearly CC0 / Public Domain?            → Use directly, however you like
  ├─ Source is CC BY / an attributed custom license?   → Use it, but credit the author + source link in your product
  ├─ Source is CC BY-SA?                               → Derivatives must be open under same terms; evaluate for closed-source products
  ├─ Source is CC BY-NC?                               → Drop it for commercial projects; find an alternative
  └─ Does the image show a clear face / brand trademark? → If yes, also need a model release + avoid implying endorsement
```

> ⚠️ **Disclaimer**: This page was compiled in 2026-10 for reference only and **does not constitute legal advice**. Consult a professional for matters involving significant commercial interests, and defer to the original license pages on the asset sites.

[← Back to Index](../README.en.md)
