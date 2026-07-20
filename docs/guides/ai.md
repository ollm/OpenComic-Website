---
sidebar_position: 0.2
---

import ImageCompare from '@site/src/components/ImageCompare';

# AI Tools
_Nightly_

OpenComic includes AI-based image tools focused on comic and manga restoration workflows.

The currently restoration workflows are the following:

- [Artifact removal](#artifact-removal)
- [Descreening](#descreening)
- [Upscaling](#upscaling)

These tools are intended to improve image quality while preserving as much of the original artwork as possible.

----

## OpenComic AI models

OpenComic provides its own family of models under the `OpenComic AI` name.

These models are trained with ethically generated images created procedurally and randomly in Krita. The stated goal of the project is to preserve as much detail from the original image as possible while modifying only the necessary parts.

For more information about how these models were trained, visit the [main repository](https://github.com/ollm/opencomic-ai-training).

### Quality levels of OpenComic AI models

OpenComic AI models come in three distinct quality levels: `Fast`, `Balanced`, and `Quality`. Each represents a different balance between speed and output quality.

- `Fast`: The quickest option with the lowest output quality.
- `Balanced`: A balanced trade-off between quality and speed.
- `Quality`: The highest output quality but also the slowest option.

### Model versions

OpenComic AI includes multiple model versions with bug fixes and quality improvements. To see the changes between versions, check the [CHANGELOG.md](https://github.com/ollm/opencomic-ai-training/blob/master/CHANGELOG.md) in the main repository.

----

## Third-party models

OpenComic AI tooling can also use models and upscalers from third-party projects.

The models and runtimes from projects such as:

- Real-CUGAN.
- Real-ESRGAN.
- Waifu2x.
- Upscayl and models distributed through its ecosystem.
- Other third-party models listed in the package model tables.

:::warning
OpenComic documents the `OpenComic AI` models as ethically generated and trained. For third-party models, this documentation does not verify or guarantee their dataset origin, training methodology, or ethical status.
:::

If you need strict provenance requirements, prefer the `OpenComic AI` models and review the source repositories of any third-party model before using it.

## What each tool does

### Artifact removal

Artifact removal is designed to reduce compression noise and similar defects without changing more of the image than necessary.

<ImageCompare
	maxWidth="530px"
    beforeImageRendering="pixelated"
    afterImageRendering="pixelated"
	before="/img/docs/ai/ai-artifact-removal-input.png"
	after="/img/docs/ai/ai-artifact-removal-output.png"
	beforeAlt="AI artifact removal input"
	afterAlt="AI artifact removal output"
/>

<ImageCompare
	maxWidth="530px"
    beforeImageRendering="pixelated"
    afterImageRendering="pixelated"
	before="/img/docs/ai/ai-artifact-removal-input-2.png"
	after="/img/docs/ai/ai-artifact-removal-output-2.png"
	beforeAlt="AI artifact removal input"
	afterAlt="AI artifact removal output"
/>

### Descreening

Descreening removes halftone and reduces moiré patterns that often appear in scanned manga and comics.

<ImageCompare
	maxWidth="530px"
	before="/img/docs/ai/ai-descreen-input.png"
	after="/img/docs/ai/ai-descreen-output.png"
	beforeAlt="AI descreen input"
	afterAlt="AI descreen output"
/>

<ImageCompare
	maxWidth="530px"
	before="/img/docs/ai/ai-descreen-input-2.png"
	after="/img/docs/ai/ai-descreen-output-2.png"
	beforeAlt="AI descreen input 2"
	afterAlt="AI descreen output 2"
/>

<ImageCompare
	maxWidth="530px"
	before="/img/docs/ai/ai-descreen-input-3.png"
	after="/img/docs/ai/ai-descreen-output-3.png"
	beforeAlt="AI descreen input 3"
	afterAlt="AI descreen output 3"
/>

### Upscaling

Upscaling increases image resolution so pages can look cleaner on high-resolution displays or after enlargement.

<ImageCompare
	maxWidth="530px"
	before="/img/docs/ai/ai-upscale-input.png"
	after="/img/docs/ai/ai-upscale-output.png"
	beforeAlt="AI upscale input"
	afterAlt="AI upscale output"
/>

<ImageCompare
	maxWidth="530px"
	before="/img/docs/ai/ai-upscale-input-2.png"
	after="/img/docs/ai/ai-upscale-output-2.png"
	beforeAlt="AI upscale input"
	afterAlt="AI upscale output"
/>

----

## Extract document images

When you use AI Tools with `PDF` or `EPUB` files, OpenComic needs to work with page images instead of the original document container.

For that reason, `Extract document images` is required for AI processing on `PDF` and `EPUB` files.

This extraction step extracts images from inside `PDF` or `EPUB` that the AI tools can process.

----

## Licensing

In the public OpenComic AI repositories:

- Source code is published under the `MIT` license.
- OpenComic AI model weights are published under `CC BY 4.0`.

For third-party models, their own licenses and terms apply.

----

## Related projects

- [OpenComic AI training](https://github.com/ollm/opencomic-ai-training)
- [OpenComic AI binaries and models API](https://github.com/ollm/opencomic-ai-bin)