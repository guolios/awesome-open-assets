> 🌐 Language: [简体中文](27-media-tooling.md) · [🇬🇧 English](27-media-tooling.en.md)

# 27 · 音视频处理开源工具（Media Tooling）

> 处理音视频的**开源项目**，可自部署进商业产品，零授权成本。
> 注意：这一篇的「署名」指的是**分发衍生作品时是否需保留许可与版权声明**，不是素材署名。

**图例**：免费商用 ✅ 可商用 ｜ ⚠️ 部分可商用 ｜ ❌ 不可商用　·　署名：不需要 / 需要 / 视情况

| 名称 | 官网 | 许可 / License | 免费商用 | 署名 | 需注册 | 来源地区 | 一句话特色 | GitHub |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| FFmpeg | https://ffmpeg.org/ | LGPL-2.1+ / GPL-2+ | ✅ | 视情况 | 否 | Global | 音视频处理的事实标准 | https://github.com/FFmpeg/FFmpeg |
| GStreamer | https://gstreamer.freedesktop.org/ | LGPL-2.1+ | ✅ | 视情况 | 否 | Global | 流式多媒体管线框架 | https://github.com/GStreamer/gstreamer |
| VLC | https://www.videolan.org/vlc/ | GPL-2.0+ / LGPL-2.1+ | ✅ | 视情况 | 否 | FR / EU | 全能播放器，也能转码串流 | https://github.com/videolan/vlc |
| HandBrake | https://handbrake.fr/ | GPL-2.0 | ✅ | 视情况 | 否 | Global | 图形化转码与压制 | https://github.com/HandBrake/HandBrake |
| LosslessCut | https://www.losslesscut.com/ | GPL-2.0 | ✅ | 视情况 | 否 | NO / EU | 无损裁剪拼接，不重编码 | https://github.com/mifi/lossless-cut |
| OBS Studio | https://obsproject.com/ | GPL-2.0 | ✅ | 视情况 | 否 | Global | 录屏与直播的开源标配 | https://github.com/obsproject/obs-studio |
| Kdenlive | https://kdenlive.org/ | GPL-2.0+ | ✅ | 视情况 | 否 | Global | 多轨非线性剪辑，跨平台 | https://github.com/KDE/kdenlive |
| Shotcut | https://www.shotcut.org/ | GPL-3.0 | ✅ | 视情况 | 否 | US | 基于 MLT 的免费剪辑器 | https://github.com/mltframework/shotcut |
| Audacity | https://www.audacityteam.org/ | GPL-3.0+ | ✅ | 视情况 | 否 | Global | 跨平台音频剪辑老牌工具 | https://github.com/audacity/audacity |
| Ardour | https://ardour.org/ | GPL-2.0+ | ✅ | 视情况 | 否 | Global | Linux 上的专业级 DAW | https://github.com/Ardour/ardour |
| SoX | https://sourceforge.net/projects/sox/ | GPL-2.0+ / LGPL-2.1+ | ✅ | 视情况 | 否 | Global | 命令行音频瑞士军刀（GitHub 为镜像） | https://github.com/chirlu/sox |
| SVT-AV1 | https://gitlab.com/AOMediaCodec/SVT-AV1 | BSD-3-Clause Clear | ✅ | 视情况 | 否 | Global | 高性能 AV1 编码器（GitHub 为镜像） | https://github.com/AOMediaCodec/SVT-AV1 |
| Whisper | https://openai.com/research/whisper | MIT | ✅ | 不需要 | 否 | US | 语音识别自动上字幕利器 | https://github.com/openai/whisper |
| MediaInfo | https://mediaarea.net/en/MediaInfo | BSD-2-Clause | ✅ | 不需要 | 否 | FR / EU | 查看导出封装码率等元数据 | https://github.com/MediaArea/MediaInfo |
| yt-dlp | https://github.com/yt-dlp/yt-dlp | Unlicense | ✅ | 不需要 | 否 | Global | 万能下载命令行，注意版权边界 | https://github.com/yt-dlp/yt-dlp |
| ffmpeg.wasm | https://ffmpegwasm.netlify.app/ | MIT（构建）/ GPL（核心） | ⚠️ | 视情况 | 否 | Global | 浏览器里跑 FFmpeg，注意 GPL 传染 | https://github.com/ffmpegwasm/ffmpeg.wasm |

> **按场景快速决策**
>
> | 场景 | 推荐 |
> | --- | --- |
> | 服务端转码 / 切片 / 推流 | **FFmpeg**（唯一真神），复杂管线可叠 **GStreamer** |
> | 桌面端压制收藏 | **HandBrake** |
> | 快速无损裁剪 | **LosslessCut**（不重编码，秒级完成） |
> | 剪辑正片 | **Kdenlive**（多轨）或 **Shotcut**（轻量） |
> | 录屏 / 直播 | **OBS Studio** |
> | 音频剪辑 / 降噪 | **Audacity**；专业混音用 **Ardour** |
> | 批量音频处理脚本 | **SoX** |
> | 自动上字幕 | **Whisper**（MIT，可本地跑） |
> | 前端网页内转码 | **ffmpeg.wasm**（⚠️ 核心是 GPL，商业分发前评估传染性） |
> | 查看媒体元数据 | **MediaInfo**（也可作为库引入） |
>
> ⚠️ **Copyleft 提醒**：FFmpeg 按具体编译选项可能是 **LGPL 或 GPL**——启用 GPL 组件（如 x264）后整体按 GPL 处理；静态链接进闭源产品需评估义务。ffmpeg.wasm 同理。
> ⚠️ **yt-dlp 的法律边界**：工具本身开源合法，但下载受版权保护内容、规避技术保护措施在多数法域违法或违反平台条款，仅用于自己有权下载的媒体。
> 注：Shutter Encoder 因闭源、libav 因 2019 年起停更，均不收录。

[← 返回总目录](../README.md)
