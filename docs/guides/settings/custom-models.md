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