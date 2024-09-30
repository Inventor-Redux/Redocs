import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Powered by You',
    Svg: 'https://assets.redux.wtf/redocs/github.svg',
    description: (
      <>
        Redocs is completely open source, which means you're in charge. And if you don't like something, you can change it - because you're the boss
      </>
    ),
  },
  {
    title: 'The Search is Over',
    Svg: 'https://assets.redux.wtf/redocs/search.svg',
    description: (
      <>
        With Redocs' powerful search feature, you'll be so efficient in your searching that you'll have time to think about what to do next. Like, what's for lunch?
      </>
    ),
  },
  {
    title: 'Lost? Found!',
    Svg: 'https://assets.redux.wtf/redocs/graduation.svg',
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
        <img src={Svg}></img>
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
