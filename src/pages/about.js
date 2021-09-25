import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';
import DocusaurusImageUrl from '@site/static/img/profile3.png';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <div className={styles.buttons}>
      <img src={DocusaurusImageUrl} className={styles.profileImage} alt="Richard Haar profile picture" />
        </div>
      <div></div>
      <div>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        </div>
      </div>
    </header>
  );
}

/*<Link
    className="button button--secondary button--lg"
    to="/docs/intro">
    Docusaurus Tutorial - 5min ⏱️
</Link>*/
//Hello from ${siteConfig.title}`}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`About`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
