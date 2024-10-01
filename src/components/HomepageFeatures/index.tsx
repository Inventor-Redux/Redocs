import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Powered by You',
    Svg: require('@site/static/img/icons8-github.svg').default,
    description: (
      <>
        Redocs is completely open source, which means you're in charge. And if you don't like something, you can change it - because you're the boss
      </>
    ),
  },
  {
    title: 'The Search is Over',
    Svg: require('@site/static/img/icons8-search.svg').default,
    description: (
      <>
        With Redocs' powerful search feature, you'll be so efficient in your searching that you'll have time to think about what to do next. Like, what's for lunch?
      </>
    ),
  },
  {
    title: 'Lost? Found!',
    Svg: require('@site/static/img/graduation.svg').default,
    description: (
      <>
        Our guides are here to help you navigate the vast documentation. And if you get stuck, don't worry - we've got a map (and a guide, and a tutorial, and...) to help you find your way.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
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
