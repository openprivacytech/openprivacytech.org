import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Community',
    Svg: require('@site/static/img/community.svg').default,
    description: (
      <>
        OpenPrivacyTech is a growing community of Privacy Researchers, Developers, Engineers, Data Scientists and Evangelists, 
        Join the thriving community to get involve in our larger Privacy Tech mission.
      </>
    ),
  },
  {
    title: 'Working Group',
    Svg: require('@site/static/img/working_group.svg').default,
    description: (
      <>
        As a member of a working group you will get the access to work with Privacy Engineers, Researchers, Developers and Industry Leaders.
        Joining a working group will give you the opportunity to collaborate and working directly on OpenPrivacyTech projects.
      </>
    ),
  },
  {
    title: 'Privacy Tech',
    Svg: require('@site/static/img/advocate.svg').default,
    description: (
      <>
        We are on a mission to make the world a better and safer place for humanity, we believe that by doing Research, Development and Advocacy in Privacy Tech we can
        solve the larger Data Privacy problems, and make the world more privacy-preserving.
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
        <h3>{title}</h3>
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
