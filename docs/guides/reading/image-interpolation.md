---
sidebar_position: 7
---

# Image interpolation

OpenComic supports different image interpolation.

## Options

### Disabled

- **Disabled (Chromium):** Interpolation is disabled, use the default chromium downscaling/upscaling.

### CSS Image Rendering

This uses the CSS [`image-rendering`](https://developer.mozilla.org/en-US/docs/Web/CSS/image-rendering) property.

- **Pixelated:** The image is scaled using the `pixelated` value.
- **Webkit Optimize Contrast:** The image is scaled using the `-webkit-optimize-contrast` value.

### Sharp

Interpolation is done using the [`sharp`](https://sharp.pixelplumbing.com/api-resize/#resize) library.

- **Nearest:** Use a [Nearest neighbour interpolation](https://en.wikipedia.org/wiki/Nearest-neighbor_interpolation).
- **Linear:** Use a [Triangle filter](https://en.wikipedia.org/wiki/Triangular_function).
- **Mitchell:** Use a [Mitchell-Netravali spline](https://www.cs.utexas.edu/~fussell/courses/cs384g-fall2013/lectures/mitchell/Mitchell.pdf).
- **Lanczos2:** Use a [Lanczos kernel](https://en.wikipedia.org/wiki/Lanczos_resampling#Lanczos_kernel) with  `a=2`.
- **Lanczos3:** Use a [Lanczos kernel](https://en.wikipedia.org/wiki/Lanczos_resampling#Lanczos_kernel) with  `a=3`.
- **Cubic (Catmull-Rom spline):** Use a [Catmull-Rom spline](https://en.wikipedia.org/wiki/Centripetal_Catmull%E2%80%93Rom_spline).

### Sharp Affine

Interpolation is done using the [`sharp`](https://sharp.pixelplumbing.com/api-resize/#resize) library with the [`affine`](https://sharp.pixelplumbing.com/api-operation/#affine) transformation.

- **Bicubic:** Use a [Bicubic interpolation](https://en.wikipedia.org/wiki/Bicubic_interpolation).
- **Bilinear:** Use a [Bilinear interpolation](https://en.wikipedia.org/wiki/Bilinear_interpolation).
- **Nohalo:** Use a [Nohalo interpolation](https://eprints.soton.ac.uk/268086/)
- **Locally Bounded Bicubic (LBB):** Use a [LBB interpolation](https://github.com/libvips/libvips/blob/master/libvips/resample/lbb.cpp#L100)
- **Vertex-Split Quadratic B-Splines (VSQBS):** Use a [VSQBS interpolation](https://github.com/libvips/libvips/blob/master/libvips/resample/vsqbs.cpp#L48)