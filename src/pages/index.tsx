import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={`${clsx('hero hero--primary', styles.heroBanner)} bg-[url(https://assets.redux.wtf/redocs/redocsbanner.png)] `}>
      <div className="container z-10">
        <Heading as="h1" className="hero__title text-white font-extrabold">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle text-white font-semibold">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--primary button--lg"
            to="/inventor-reference">
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Home`}
      description="The Community-Driven Hub for All Things Inventor">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
