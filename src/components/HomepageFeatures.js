import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'About',
    //Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Always interested in learning new skills, trying to master existing skills and work on interesting problems. Profiling and optimising C++ is a particular favourite of mine as well as sharing my knowledge with others.
      </>
    ),
  },
  {
    title: 'Hobbies',
    //Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Tinkering with JavaScript has been fun lately and I've been reading quite a few tech books, I can recommend pretty much any by Scott Meyers or Herb Sutter. In terms of non programming, The Savage Detectives and also Black Rain.

        I got my full motorbike licence back in 2018 and got a road bike, that's been great fun and I'm currently looking at getting a motorcross bike.
        
      </>
    ),
  },
  {
    title: 'Contact',
    //Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Feel free to get in touch <a href="mailto:rh@richhaar.com">via email</a> or on LinkedIn.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

//<Svg className={styles.featureSvg} alt={title} />
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
