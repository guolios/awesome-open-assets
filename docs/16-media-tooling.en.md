> 🌐 Language: [🇨🇳 简体中文](16-media-tooling.md) · **English**

# 16 · Open-Source Audio/Video Tools (Media Tooling)

> **Open-source projects** for audio/video processing, self-hostable in commercial products with zero licensing cost.
> Note: here 'attribution' means **whether license/copyright notices must be kept when distributing derivatives**, not asset crediting.

**Legend**: ✅ Commercial use free ｜ ⚠️ Partially commercial ｜ ❌ Non-commercial only　·　Attribution: Not required / Required / Varies

| Name | Website | License | Commercial | Attribution | Sign-up | Region | Highlight | GitHub |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| FFmpeg | https://ffmpeg.org/ | LGPL-2.1+ / GPL-2+ | ✅ | Varies | No | Global | The de facto standard for A/V processing | https://github.com/FFmpeg/FFmpeg |
| GStreamer | https://gstreamer.freedesktop.org/ | LGPL-2.1+ | ✅ | Varies | No | Global | Streaming multimedia pipeline framework | https://github.com/GStreamer/gstreamer |
| VLC | https://www.videolan.org/vlc/ | GPL-2.0+ / LGPL-2.1+ | ✅ | Varies | No | FR / EU | All-purpose player; also transcode & stream | https://github.com/videolan/vlc |
| HandBrake | https://handbrake.fr/ | GPL-2.0 | ✅ | Varies | No | Global | GUI transcoding & encoding | https://github.com/HandBrake/HandBrake |
| LosslessCut | https://www.losslesscut.com/ | GPL-2.0 | ✅ | Varies | No | NO / EU | Lossless trim & merge, no re-encode | https://github.com/mifi/lossless-cut |
| OBS Studio | https://obsproject.com/ | GPL-2.0 | ✅ | Varies | No | Global | Open-source standard for screen capture & live | https://github.com/obsproject/obs-studio |
| Kdenlive | https://kdenlive.org/ | GPL-2.0+ | ✅ | Varies | No | Global | Multi-track non-linear editor, cross-platform | https://github.com/KDE/kdenlive |
| Shotcut | https://www.shotcut.org/ | GPL-3.0 | ✅ | Varies | No | US | Free MLT-based editor | https://github.com/mltframework/shotcut |
| Audacity | https://www.audacityteam.org/ | GPL-3.0+ | ✅ | Varies | No | Global | Cross-platform veteran audio editor | https://github.com/audacity/audacity |
| Ardour | https://ardour.org/ | GPL-2.0+ | ✅ | Varies | No | Global | Professional-grade DAW on Linux | https://github.com/Ardour/ardour |
| SoX | https://sourceforge.net/projects/sox/ | GPL-2.0+ / LGPL-2.1+ | ✅ | Varies | No | Global | CLI audio Swiss army knife (GitHub is mirror) | https://github.com/chirlu/sox |
| SVT-AV1 | https://gitlab.com/AOMediaCodec/SVT-AV1 | BSD-3-Clause Clear | ✅ | Varies | No | Global | High-performance AV1 encoder (GitHub is mirror) | https://github.com/AOMediaCodec/SVT-AV1 |
| Whisper | https://openai.com/research/whisper | MIT | ✅ | Not required | No | US | Speech recognition for auto-subtitles | https://github.com/openai/whisper |
| MediaInfo | https://mediaarea.net/en/MediaInfo | BSD-2-Clause | ✅ | Not required | No | FR / EU | View/export metadata like container & bitrate | https://github.com/MediaArea/MediaInfo |
| yt-dlp | https://github.com/yt-dlp/yt-dlp | Unlicense | ✅ | Not required | No | Global | Universal download CLI; mind copyright bounds | https://github.com/yt-dlp/yt-dlp |
| ffmpeg.wasm | https://ffmpegwasm.netlify.app/ | MIT（构建）/ GPL（核心） | ⚠️ | Varies | No | Global | Run FFmpeg in browser; mind GPL copyleft | https://github.com/ffmpegwasm/ffmpeg.wasm |

> **Quick decision by scenario**
>
> | Scenario | Recommendation |
> | --- | --- |
> | Server-side transcode / segment / push | **FFmpeg** (the only true god), layer **GStreamer** for complex pipelines |
> | Desktop encoding & archiving | **HandBrake** |
> | Quick lossless trim | **LosslessCut** (no re-encode, done in seconds) |
> | Editing the main cut | **Kdenlive** (multi-track) or **Shotcut** (lightweight) |
> | Screen capture / live | **OBS Studio** |
> | Audio editing / denoise | **Audacity**; pro mixing with **Ardour** |
> | Batch audio processing scripts | **SoX** |
> | Auto subtitles | **Whisper** (MIT, runs locally) |
> | In-browser frontend transcode | **ffmpeg.wasm** (⚠️ core is GPL; assess copyleft before commercial distribution) |
> | View media metadata | **MediaInfo** (also usable as a library) |
>
> ⚠️ **Copyleft reminder**: depending on build options, FFmpeg may be **LGPL or GPL** — enabling GPL components (e.g. x264) makes the whole GPL; static linking into closed-source products needs obligation review. Same for ffmpeg.wasm.
> ⚠️ **Legal boundary of yt-dlp**: the tool itself is open-source and legal, but downloading copyrighted content or circumventing technical protection measures is illegal or violates platform terms in most jurisdictions — only use it for media you have the right to download.
> Note: Shutter Encoder (closed-source) and libav (no updates since 2019) are not included.

[← Back to Index](../README.en.md)
