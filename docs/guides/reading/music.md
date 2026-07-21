---
sidebar_position: 8
---

# Music

OpenComic supports three kinds of audio while reading:

- [Global background music](#global-background-music) for the whole comic.
- [Page-range background music](#page-range-background-music-webtoon-nightly) for specific Webtoon sections.
- [AudioManga background music and SFX](#audiomanga-background-music-and-sfx-nightly) tied to panels.

----

## Global background music

OpenComic looks for audio files inside the current comic folder or archive, and also in its parent folder. If it finds one or more supported audio files, it plays the first one it detects.

That track is then used as background music for the entire comic.

----

## Page-range background music (Webtoon) _Nightly_

This mode lets you play different background tracks for specific page ranges. The audio files must be stored inside the same comic folder or archive.

Valid filename format:

```text
bgm-0001-0006.mp3
bgm-0007-0008.mp3
bgm-0008-0012.mp3
```

Matching image files:

```text
0001.jpg
0002.jpg
0003.jpg
0004.jpg
0005.jpg
```

This alternative format is also valid:

```text
filename_bgm-0001-0006.mp3
filename_bgm-0007-0008.mp3
filename_bgm-0008-0012.mp3
```

Matching image files:

```text
filename_0001.jpg
filename_0002.jpg
filename_0003.jpg
filename_0004.jpg
filename_0005.jpg
```

In both cases, the page numbers in the audio filename define where that track starts and ends.

### gallery-dl

If you use `gallery-dl`, configure it so Webtoon background music is exported in a format OpenComic can match by page range, for example:

```json
{
	"extractor": {
		"ytdl": {
			"enabled": true,
			"format": "bestaudio"
		},
		"webtoons": {
			"archive-format": "{title_no}_{episode}_{type}_{num}_{audioId}",
			"episode": {
				"bgm": true,
				"filename": {
					"type == 'bgm'": "bgm-{num_play:>04}-{num_stop|'0000':>04}.{extension}",
					"": "{num:>04}.{extension}"
				}
			}
		}
	}
}
```

If your current template gives duplicate names for multiple tracks in the same episode, add a unique field such as `sortOrder` or `audioId` to the BGM filename. For example:

```json
"type == 'bgm'": "bgm-{num_play:>04}-{num_stop|'0000':>04}_{sortOrder:>02}.{extension}"
```

You can also use image-based naming fields added for this workflow:

- `filename_play`
- `filename_stop`

For example:

```json
"type == 'bgm'": "bgm-{filename_play}-{filename_stop}.{extension}"
"": "{filename}.{extension}"
```

----

## AudioManga background music and SFX _Nightly_

This mode is based on the AudioManga format. Like the Webtoon mode, it supports background music, but it also adds sound effects that can be attached to specific panels.

Sound effects are played when the reader presses the panel. In guided view, they are played automatically.

To enable this mode, the comic folder or archive must contain at least one of these JSON files:

- `music.json`
- `bgm.json`
- `ost.json`
- `sfx.json`

The JSON can be written in two ways:

- A single object that contains both background music (`bgm` or `ost`) and `sfx`.
- A plain array that contains only one type of entry.

`ost` and `bgm` are treated as the same thing. Page numbering starts at `1`, not `0`. Audio files can also be placed inside subfolders.

Example with both music and sound effects:

```json
{
	"ost": [
		{
			"path": "./opening.mp3",
			"startPage": 1,
			"endPage": -1
		},
		{
			"path": "./prologue.mp3",
			"startPage": 1.9,
			"endPage": -1
		}
	],
	"sfx": [
		{
			"path": "./punch.mp3",
			"page": 2,
			"top": 37.3,
			"left": 57.6,
			"width": 41.8,
			"height": 30.9
		},
		{
			"path": "./glass_break.mp3",
			"page": 2,
			"top": 69.0,
			"left": 33.2,
			"width": 53.3,
			"height": 23.8
		},
		{
			"path": "./punch_miss.mp3",
			"page": 3,
			"top": 0.9,
			"left": 55.9,
			"width": 36.4,
			"height": 54.8
		}
	]
}
```

Example of a single-type JSON file:

```json
[
	{
		"path": "./punch.mp3",
		"page": 2,
		"top": 37.3,
		"left": 57.6,
		"width": 41.8,
		"height": 30.9
	},
	{
		"path": "./glass_break.mp3",
		"page": 2,
		"top": 69.0,
		"left": 33.2,
		"width": 53.3,
		"height": 23.8
	},
	{
		"path": "./punch_miss.mp3",
		"page": 3,
		"top": 0.9,
		"left": 55.9,
		"width": 36.4,
		"height": 54.8
	}
]
```

When using separate files, `music.json`, `bgm.json`, and `ost.json` are interpreted as background music data, while `sfx.json` is interpreted as sound effect data.