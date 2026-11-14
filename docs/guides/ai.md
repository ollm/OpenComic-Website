---
sidebar_position: 0.2
---

import ImageCompare from '@site/src/components/ImageCompare';

# AI Tools

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

OpenComic AI models are available in three quality levels: `Fast`, `Balanced`, and `Quality`. Each level represents a different trade-off between processing speed and output quality. The actual quality of each level may vary depending on the model version.

- `Fast`: The fastest option, with the lowest output quality.
- `Balanced`: A balance between processing speed and output quality.
- `Quality`: The highest output quality, but also the slowest option.

#### V3 Quality Levels

V3 models offer improved quality-to-speed performance compared to V2 models. They are currently available only in the `Fast` and `Balanced` levels.

- `Fast`: Provides quality comparable to V2 `Balanced`, while maintaining a processing speed similar to V2 `Fast`.
- `Balanced`: Provides quality comparable to V2 `Quality`, while maintaining a processing speed similar to V2 `Balanced`.

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

#### Remove moiré patterns

The models have been trained to remove moiré patterns. V4 models have a specialized architecture for this purpose, making them particularly effective at reducing these patterns.

Smaller moiré patterns are removed more effectively, while larger patterns may persist in some cases.

<ImageCompare
	maxWidth="530px"
	before="/img/docs/ai/ai-descreen-moire-input.png"
	after="/img/docs/ai/ai-descreen-moire-output.png"
	beforeAlt="AI descreen moire input"
	afterAlt="AI descreen moire output"
/>

<ImageCompare
	maxWidth="530px"
	before="/img/docs/ai/ai-descreen-moire-input-2.png"
	after="/img/docs/ai/ai-descreen-moire-output-2.png"
	beforeAlt="AI descreen moire input 2"
	afterAlt="AI descreen moire output 2"
/>

<ImageCompare
	maxWidth="530px"
	before="/img/docs/ai/ai-descreen-moire-input-3.png"
	after="/img/docs/ai/ai-descreen-moire-output-3.png"
	beforeAlt="AI descreen moire input 3"
	afterAlt="AI descreen moire output 3"
/>

#### Keep big halftones

This option allows the AI descreening tool to preserve larger halftone patterns while removing smaller print patterns. It is useful for preserving intentional halftone textures and maintaining the artistic integrity of the original material.

**Off**

Larger halftone patterns are treated like the other print patterns and may be removed.

<ImageCompare
	maxWidth="530px"
	before="/img/docs/ai/ai-descreen-keep-input.png"
	after="/img/docs/ai/ai-descreen-keep-output.png"
	beforeAlt="AI descreen keep input"
	afterAlt="AI descreen keep output"
/>

**On**

Larger halftone patterns are preserved while smaller print patterns are removed.

<ImageCompare
	maxWidth="530px"
	before="/img/docs/ai/ai-descreen-keep-input.png"
	after="/img/docs/ai/ai-descreen-keep-output-2.png"
	beforeAlt="AI descreen keep input"
	afterAlt="AI descreen keep output 2"
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

## Preprocess folders with AI

You can run the AI settings configured for a comic on its images before opening it:

1. Configure the AI actions for the comic or folder.
2. In the library or file browser, select one or more folders.
3. Open the context menu and choose **Preprocess images with AI**.

OpenComic processes the files in the selected folders using the AI settings associated with each comic. A progress indicator shows the work and lets you cancel it. If none of the selected folders has AI configured, OpenComic will show a notice instead.

## Save AI-processed images

While reading, open the image context menu and choose **Save all AI-processed images**. OpenComic saves the pages from the current comic.

The destination follows your image-saving settings: OpenComic either uses the configured save folder or asks you to choose where to save the images.

:::tip
For `PDF` and `EPUB` files, enable [Extract document images](#extract-document-images) before using AI tools.
:::

----

## Extract document images

When you use AI Tools with `PDF` or `EPUB` files, OpenComic needs to work with page images instead of the original document container.

For that reason, `Extract document images` is required for AI processing on `PDF` and `EPUB` files.

This extraction step extracts images from inside `PDF` or `EPUB` that the AI tools can process.

----

## Licensing

In the public OpenComic AI repositories:

- Source code is published under the <a href="https://github.com/ollm/opencomic-ai-training/blob/master/LICENSE">MIT</a> license.
- OpenComic AI model weights are published under <a href="https://github.com/ollm/opencomic-ai-training/blob/master/LICENSE_MODELS">CC BY 4.0</a>.

For third-party models, their own licenses and terms apply.

----

## Related projects

- [OpenComic AI training](https://github.com/ollm/opencomic-ai-training)
- [OpenComic AI binaries and models API](https://github.com/ollm/opencomic-ai-bin)