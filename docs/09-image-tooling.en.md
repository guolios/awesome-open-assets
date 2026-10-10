> 🌐 Language: [🇨🇳 简体中文](09-image-tooling.md) · **English**

# 09 · Image Processing & Optimization Tools（Processing & Optimization & Tooling）

> This page is not a stock site but **open-source tools for processing assets**: compression, transcoding, format conversion, and image CDNs.
> All are open-source projects that **can be self-hosted into commercial products at zero licensing cost**, making them the standard reference for building your own image pipeline.

**Legend**: Commercial use ✅ allowed ｜ ⚠️ partially allowed ｜ ❌ not allowed　·　Attribution: Not required / Required / Varies

| Name | Website | License | Commercial | Attribution | Sign-up | Region | Highlight | GitHub |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| sharp | https://sharp.pixelplumbing.com | Apache-2.0 | ✅ | Not required | No | Global | De facto standard for Node.js image processing | https://github.com/lovell/sharp |
| libvips | https://www.libvips.org | LGPL-2.1-or-later | ✅ | Not required | No | UK | Low-memory, high-speed image processing core | https://github.com/libvips/libvips |
| Squoosh | https://squoosh.app | Apache-2.0 | ✅ | Not required | No | US | In-browser compression; images never leave your device | https://github.com/GoogleChromeLabs/squoosh |
| ImageMagick | https://imagemagick.org | ImageMagick License | ✅ | Required | No | US | Venerable command-line image Swiss Army knife | https://github.com/ImageMagick/ImageMagick |
| oxipng | https://github.com/oxipng/oxipng | MIT | ✅ | Not required | No | Global | Lossless, multi-threaded PNG optimizer written in Rust | https://github.com/oxipng/oxipng |
| libwebp（cwebp） | https://developers.google.com/speed/webp | BSD-3-Clause | ✅ | Not required | No | US | Google's official WebP codec | https://github.com/webmproject/libwebp |
| mozjpeg | https://github.com/mozilla/mozjpeg | BSD-3-Clause | ✅ | Not required | No | US | High-compression-ratio JPEG encoder | https://github.com/mozilla/mozjpeg |
| libjxl（JPEG XL） | https://github.com/libjxl/libjxl | BSD-3-Clause | ✅ | Not required | No | Global | Next-generation JPEG XL codec | https://github.com/libjxl/libjxl |
| jpegoptim | https://github.com/tjko/jpegoptim | GPL-2.0-or-later | ✅ | Not required | No | Global | Lossless and lossy JPEG optimization | https://github.com/tjko/jpegoptim |
| pngquant | https://pngquant.org | GPL-3.0 或商业授权 | ✅ | Not required | No | Global | Lossy PNG quantization that dramatically shrinks file size | https://github.com/kornelski/pngquant |
| Thumbnailator | https://github.com/coobird/thumbnailator | MIT | ✅ | Not required | No | JP | Minimal-API Java thumbnail library | https://github.com/coobird/thumbnailator |
| imgproxy | https://imgproxy.net | MIT | ✅ | Not required | No | EU | Real-time image processing server built on libvips | https://github.com/imgproxy/imgproxy |
| thumbor | https://www.thumbor.org | MIT | ✅ | Not required | No | BR | Smart cropping and URL-parameter-based processing | https://github.com/thumbor/thumbor |
| images.weserv.nl | https://images.weserv.nl | 开源核心（weserv/images） | ⚠️ | Not required | No | NL / EU | Zero-setup open-source image CDN ⚠️ verify | https://github.com/weserv/images |

> **Selection Guide**
>
> **Quick decision by scenario**
>
> | Scenario | Recommendation |
> | --- | --- |
> | Thumbnail / transcode in a Node service | **sharp** (powered by libvips under the hood, best performance) |
> | Add thumbnailing to a Java backend | **Thumbnailator** (a single jar, a few lines of code) |
> | Compress a few images temporarily, no setup | **Squoosh** (web version, images not uploaded to a server) |
> | Batch-compress PNG / JPEG in CI | **oxipng** + **mozjpeg** |
> | Build a real-time crop-thumbnail service | **imgproxy** (Go-based single container, handles high concurrency) or **thumbor** (Python) |
> | No operations at all | Cloudflare Images / cloud OSS image processing, or self-host images.weserv.nl |
>
> ⚠️ **Beware Copyleft contagion**: libvips is LGPL (dynamic linking is generally fine), but **jpegoptim is GPL-2.0 and pngquant is GPL-3.0** (commercial licensing also available). If you statically link them into a closed-source distribution, assess your GPL obligations.
> ⚠️ **The ImageMagick License requires preserving the copyright notice**; its commercial licensing flow differs slightly from common permissive licenses, so remember to include attribution.

[← Back to Index](../README.en.md)
