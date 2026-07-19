import {ReactCompareSlider, ReactCompareSliderImage} from 'react-compare-slider';
import styles from './styles.module.css';

export default function ImageCompare({
  before,
  after,
  beforeAlt = 'Input image',
  afterAlt = 'Output image',
  beforeLabel = 'Input',
  afterLabel = 'Output',
  maxWidth,
  imageRendering,
  beforeImageRendering,
  afterImageRendering,
  style,
}) {
  const itemOneStyle = {
    imageRendering: beforeImageRendering ?? imageRendering,
  };

  const itemTwoStyle = {
    imageRendering: afterImageRendering ?? imageRendering,
  };

  const wrapperStyle = {
    ...style,
    maxWidth: maxWidth ?? style?.maxWidth,
  };

  return (
    <figure className={styles.wrapper} style={wrapperStyle}>
      <ReactCompareSlider
        className={styles.slider}
        itemOne={
          <ReactCompareSliderImage
            src={before}
            alt={beforeAlt}
            style={itemOneStyle}
          />
        }
        itemTwo={
          <ReactCompareSliderImage
            src={after}
            alt={afterAlt}
            style={itemTwoStyle}
          />
        }
      />
      <figcaption className={styles.labels}>
        <span>{beforeLabel}</span>
        <span>{afterLabel}</span>
      </figcaption>
    </figure>
  );
}
