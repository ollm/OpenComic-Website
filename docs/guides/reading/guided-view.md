---
sidebar_position: 5.1
---

# Guided View
_Experimental_

Guided View changes the reading flow from full-page navigation to panel-by-panel navigation.

Instead of advancing directly to the next page, OpenComic focuses on smaller reading areas so you can move through the comic in a more directed way.

----

## How it works

OpenComic automatically detects the panels on the page. There are 3 navigation modes:

- [Focus](#focus): Focuses on the panel, does not hide the rest of the page.
- [Hide](#hide): Can hide the next and previous panels, showing only the current panel.
- [Immersive](#immersive): Hides everything and shows only the current panel, with a black background.

There are also other configurable options.

![Guided View](/img/docs/reading/guided-view/dialog.png)

----

## Example of the different navigation modes

### Focus

<video controls muted loop playsInline width="100%">
	<source src="/videos/docs/reading/guided-view/focus.mp4" type="video/mp4" />
</video>

### Hide

<video controls muted loop playsInline width="100%">
	<source src="/videos/docs/reading/guided-view/hide.mp4" type="video/mp4" />
</video>

#### Hide (Blur)

<video controls muted loop playsInline width="100%">
	<source src="/videos/docs/reading/guided-view/hide-blur.mp4" type="video/mp4" />
</video>

### Immersive

<video controls muted loop playsInline width="100%">
	<source src="/videos/docs/reading/guided-view/immersive.mp4" type="video/mp4" />
</video>

----

## AudioManga integration

Guided View works particularly well with [Music](music) setups that use AudioManga `sfx` metadata.

In that case, sound effects can be triggered automatically while moving through the guided sequence, instead of requiring a manual press on the panel.

----