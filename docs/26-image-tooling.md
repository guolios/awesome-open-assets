> 🌐 Language: [简体中文](26-image-tooling.md) · [🇬🇧 English](26-image-tooling.en.md)

# 26 · 图片处理与优化工具（Processing & Optimization & Tooling）

> 这一篇不是素材站，而是**处理素材的开源工具**：压缩、转码、格式转换、CDN 图床。
> 全部为开源项目，**可自部署进商业产品，零授权成本**，是自建图片流水线的标准选型参考。

**图例**：免费商用 ✅ 可商用 ｜ ⚠️ 部分可商用 ｜ ❌ 不可商用　·　署名：不需要 / 需要 / 视情况

| 名称 | 官网 | 许可 / License | 免费商用 | 署名 | 需注册 | 来源地区 | 一句话特色 | GitHub |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| sharp | https://sharp.pixelplumbing.com | Apache-2.0 | ✅ | 不需要 | 否 | Global | Node.js 图片处理的事实标准 | https://github.com/lovell/sharp |
| libvips | https://www.libvips.org | LGPL-2.1-or-later | ✅ | 不需要 | 否 | UK | 低内存高速影像处理核心 | https://github.com/libvips/libvips |
| Squoosh | https://squoosh.app | Apache-2.0 | ✅ | 不需要 | 否 | US | 浏览器端压缩，图片不出本地 | https://github.com/GoogleChromeLabs/squoosh |
| ImageMagick | https://imagemagick.org | ImageMagick License | ✅ | 需要 | 否 | US | 老牌命令行影像瑞士刀 | https://github.com/ImageMagick/ImageMagick |
| oxipng | https://github.com/oxipng/oxipng | MIT | ✅ | 不需要 | 否 | Global | Rust 编写，无损 PNG 多线程优化 | https://github.com/oxipng/oxipng |
| libwebp（cwebp） | https://developers.google.com/speed/webp | BSD-3-Clause | ✅ | 不需要 | 否 | US | Google 官方 WebP 编解码器 | https://github.com/webmproject/libwebp |
| mozjpeg | https://github.com/mozilla/mozjpeg | BSD-3-Clause | ✅ | 不需要 | 否 | US | 高压缩比 JPEG 编码器 | https://github.com/mozilla/mozjpeg |
| libjxl（JPEG XL） | https://github.com/libjxl/libjxl | BSD-3-Clause | ✅ | 不需要 | 否 | Global | 新一代 JPEG XL 编解码器 | https://github.com/libjxl/libjxl |
| jpegoptim | https://github.com/tjko/jpegoptim | GPL-2.0-or-later | ✅ | 不需要 | 否 | Global | JPEG 无损与有损优化 | https://github.com/tjko/jpegoptim |
| pngquant | https://pngquant.org | GPL-3.0 或商业授权 | ✅ | 不需要 | 否 | Global | PNG 有损量化压缩，体积骤降 | https://github.com/kornelski/pngquant |
| Thumbnailator | https://github.com/coobird/thumbnailator | MIT | ✅ | 不需要 | 否 | JP | Java 缩图库，API 极简 | https://github.com/coobird/thumbnailator |
| imgproxy | https://imgproxy.net | MIT | ✅ | 不需要 | 否 | EU | 实时图片处理服务器，基于 libvips | https://github.com/imgproxy/imgproxy |
| thumbor | https://www.thumbor.org | MIT | ✅ | 不需要 | 否 | BR | 智能裁剪与 URL 参数处理 | https://github.com/thumbor/thumbor |
| images.weserv.nl | https://images.weserv.nl | 开源核心（weserv/images） | ⚠️ | 不需要 | 否 | NL / EU | 免搭建的开源图片处理 CDN ⚠️待核实 | https://github.com/weserv/images |
| Pillow | https://python-pillow.org | MIT / HPND | ✅ | 不需要 | 否 | Global | Python 图像处理事实标准 | https://github.com/python-pillow/Pillow |
| ImageSharp | https://sixlabors.com/products/imagesharp | Apache-2.0 | ⚠️ | 不需要 | 否 | Global | .NET 图像库，大营收需授权 | https://github.com/SixLabors/ImageSharp |
| GraphicsMagick | http://www.graphicsmagick.org | MIT | ✅ | 不需要 | 否 | US | ImageMagick 精简高效分支 | — |
| libpng | http://www.libpng.org | libpng / zlib | ✅ | 不需要 | 否 | Global | PNG 参考实现编解码库 | https://github.com/glennrp/libpng |
| libheif | https://github.com/strukturag/libheif | LGPL-3.0 / MIT | ✅ | 不需要 | 否 | Global | HEIF/AVIF 编解码核心库 | https://github.com/strukturag/libheif |
| libavif | https://github.com/AOMediaCodec/libavif | BSD-2-Clause | ✅ | 不需要 | 否 | US | AVIF 官方编解码库 | https://github.com/AOMediaCodec/libavif |
| OptiPNG | https://optipng.sourceforge.net | zlib | ✅ | 不需要 | 否 | Global | PNG 无损再压缩优化 | — |
| pngcrush | https://pmt.sourceforge.io/pngcrush | libpng / zlib | ✅ | 不需要 | 否 | Global | PNG 多策略压损优化器 | — |
| gifsicle | https://www.lcdf.org/gifsicle | GPL-2.0 | ✅ | 不需要 | 否 | US | GIF 动图制作与优化 | https://github.com/kohler/gifsicle |
| svgo | https://github.com/svg/svgo | MIT | ✅ | 不需要 | 否 | Global | SVG 矢量图无损优化 | https://github.com/svg/svgo |
| imagemin | https://github.com/imagemin/imagemin | MIT | ✅ | 不需要 | 否 | Global | Node 图片压缩流水线 | https://github.com/imagemin/imagemin |
| node-canvas | https://github.com/Automattic/node-canvas | MIT | ✅ | 不需要 | 否 | US | Node 端 Canvas 绘图库 | https://github.com/Automattic/node-canvas |
| Jimp | https://github.com/jimp-dev/jimp | MIT | ✅ | 不需要 | 否 | Global | 纯 JS 无原生依赖图像库 | https://github.com/jimp-dev/jimp |
| bimg | https://github.com/h2non/bimg | MIT | ✅ | 不需要 | 否 | Global | Go 语言 libvips 封装 | https://github.com/h2non/bimg |
| picfit | https://github.com/thoas/picfit | MIT | ✅ | 不需要 | 否 | FR | Go 实时缩图服务 | https://github.com/thoas/picfit |
| Caesium | https://saerasoft.com/caesium | GPL-3.0 | ✅ | 不需要 | 否 | EU | 跨平台批量图片压缩 | https://github.com/Lymphatus/caesium-image-compressor |
| Trimage | https://trimage.org | MIT | ✅ | 不需要 | 否 | Global | Linux 无损压缩 GUI | https://github.com/Kilian/Trimage |
| ECT | https://github.com/fhanau/Efficient-Compression-Tool | Apache-2.0 | ✅ | 不需要 | 否 | Global | 命令行 PNG/JPEG 高效压缩 | https://github.com/fhanau/Efficient-Compression-Tool |
| guetzli | https://github.com/google/guetzli | Apache-2.0 | ✅ | 不需要 | 否 | US | Google 感知 JPEG 编码器 | https://github.com/google/guetzli |
| cropperjs | https://github.com/fengyuanchen/cropperjs | MIT | ✅ | 不需要 | 否 | Global | 浏览器端图片裁剪组件 | https://github.com/fengyuanchen/cropperjs |
| Pica | https://github.com/nodeca/pica | MIT | ✅ | 不需要 | 否 | Global | 浏览器端高质量缩放 | https://github.com/nodeca/pica |
| heic2any | https://github.com/alexcorvi/heic2any | MIT | ✅ | 不需要 | 否 | Global | 浏览器 HEIC 转 JPEG | https://github.com/alexcorvi/heic2any |
| GIMP | https://www.gimp.org | GPL-3.0 | ✅ | 不需要 | 否 | Global | 开源图像编辑瑞士军刀 | — |
| Krita | https://krita.org | GPL-3.0 | ✅ | 不需要 | 否 | Global | 开源数字绘画与编辑 | — |
| OpenCV | https://opencv.org | Apache-2.0 | ✅ | 不需要 | 否 | Global | 计算机视觉与图像处理库 | https://github.com/opencv/opencv |

> **选型建议**
>
> **按场景快速决策**
>
> | 场景 | 推荐 |
> | --- | --- |
> | Node 服务里做缩图 / 转码 | **sharp**（底层就是 libvips，性能最好） |
> | Java 后端加个缩图功能 | **Thumbnailator**（一个 jar，几行代码） |
> | 临时压几张图，不想装环境 | **Squoosh**（网页版，图片不上传服务器） |
> | CI 里批量压 PNG / JPEG | **oxipng** + **mozjpeg** |
> | 搭一个实时裁剪缩略图服务 | **imgproxy**（Go 写的单容器，扛高并发）或 **thumbor**（Python） |
> | 完全不想运维 | Cloudflare Images / 各云厂商 OSS 图片处理，或自建 images.weserv.nl |
>
> ⚠️ **注意 Copyleft 传染性**：libvips 是 LGPL（动态链接一般无碍），但 **jpegoptim 是 GPL-2.0、pngquant 是 GPL-3.0**（另有商业授权可选）。若要把它们静态链接进闭源发行物，需评估 GPL 义务。
> ⚠️ **ImageMagick License 要求保留版权声明**，商用许可流程与常见宽松 license 略有不同，注意包含 attribution。

[← 返回总目录](../README.md)
