---
sidebar_position: 2
---

# Custom Models
_Nightly_

In addition to the models included by default, OpenComic allows you to integrate custom models.

Any model that can be converted to `ncnn` should be compatible. If a model or architecture has been successfully converted to `ncnn` but does not work in OpenComic, you can [open an issue in the OpenComic repository](https://github.com/ollm/OpenComic/issues).

## Convert models to ncnn

You can use [chaiNNer](https://github.com/chaiNNer-org/chaiNNer) or [PNNX](https://github.com/Tencent/ncnn/tree/master/tools/pnnx) to convert models to `ncnn`.

## Add custom models

To add custom models, create the following folder structure inside the custom models directory configured in the application settings.

Each model must include both its `.bin` file and the corresponding `.param` file.

Models can be placed in the root `models` directory to make them available across all categories, or in a category-specific directory to organize them by function.

```text
custom_models
├── models
│   ├── model-name.bin
│   └── model-name.param
├── artifact-removal
│   └── models
│       ├── model-name.bin
│       └── model-name.param
├── descreen
│   └── models
│       ├── model-name.bin
│       └── model-name.param
├── descreen-mask # Currently, the model cannot be changed by the user
│   └── models
│       ├── model-name.bin
│       └── model-name.param
├── panels # Currently, the model cannot be changed by the user
│   └── models
│       ├── model-name.bin
│       └── model-name.param
└── upscale
    └── models
        ├── model-name-2x.bin
        ├── model-name-2x.param
        ├── model-name-3x.bin
        ├── model-name-3x.param
        ├── model-name-4x.bin
        └── model-name-4x.param
```

## Upscaling models

For upscaling models, the scale factor must be specified in the filename (e.g., `2x`, `3x`, or `4x`). If no scale factor is specified, the model is assumed to use a `1x` scale.

Models with the same name but different scale factors are grouped together in the model selector. The scale factor is configured through the input range.

## Model parameters

Model parameters can be specified in the filename using `key=value` tokens. Use the same filename for the `.bin` and `.param` files, for example `model scale=4x tileSize=256.bin` and `model scale=4x tileSize=256.param`.

| Parameter | Description | Example | Default |
| --- | --- | --- | --- |
| `scale` | Model scale factor. Use a value such as `1`, `2`, `3`, `4`, etc. The scale can also be specified using only the number followed by `x` (for example, `4x`), as shown in the example structure. | `scale=4` | `1x` |
| `tileSize` | Fixed tile size in pixels used to process the image. | `tileSize=256` | Auto |
| `tileSizeFromMem` | Measured model memory usage (MB) for each tile size, using the T+MB,... format. Used to automatically estimate the optimal tile size based on available memory. | `tileSizeFromMem=128+41,256+201` `tileSizeFromMem=ESRGAN_LITE` | [`ESRGAN_Upscale`](https://github.com/ollm/opencomic-ai-bin/blob/main/src/index.mts#L122) |
| `tileAlignment` | Multiple to which tile input dimensions are padded, a power of two (`2`, `4`, `8`, etc.). Set to `1` to disable alignment. This is necessary for models that use internal downscaling, such as with pixel unshuffle, to avoid artifacts. | `tileAlignment=8` | `4` |
| `fp32` | Whether to use 32-bit floating point precision. | `fp32=true` | `false` |

Example filename with parameters, all of them supported:

```text
model-scale=4x-tileSizeFromMem=128+41,256+201-tileAlignment=8.bin
model scale=4x tileSizeFromMem=128+41.bin
model scale=4x tileSizeFromMem=128+970,256+2963,tileAlignment=8,fp32=true.bin
Model 4x tileSize=256 tileAlignment=8 fp32=true.bin
```