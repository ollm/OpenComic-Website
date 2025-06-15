import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Optimized for Comic and Manga',
    Jpg: require('@site/static/img/screenshots/store/macos/colorize-small.jpg').default,
    Png: require('@site/static/img/screenshots/store/macos/colorize.png').default,
    description: (
      <>
        High-quality downscaling with <code>Lanczos3</code> and full customization for comics and manga.
      </>
    ),
  },
  {
    title: 'Cross-platform support',
    Jpg: require('@site/static/img/screenshots/store/macos/main-small.jpg').default,
    Png: require('@site/static/img/screenshots/store/macos/main.png').default,
    description: (
      <>
        It offers seamless cross-platform support, fully compatible with <code>Windows</code>, <code>macOS</code>, and <code>Linux.</code> 
      </>
    ),
  },
  {
    title: 'Read ePub and PDF',
    Jpg: require('@site/static/img/screenshots/store/macos/ebook-small.jpg').default,
    Png: require('@site/static/img/screenshots/store/macos/ebook.png').default,
    description: (
      <>
        Includes basic capabilities for accessing and reading content in <code>ePub</code> and <code>PDF</code> formats.
      </>
    ),
  },
];

function Feature({Png, Jpg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <a href={Png} target="_blank">
          <img className={styles.featurePng} role="img" src={Jpg} alt={title} />
        </a>
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
