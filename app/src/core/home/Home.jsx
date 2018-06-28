import React from 'react';

import styles from './Home.css';

const Home = (props) => (
  <div className={styles.container}>
    <div>Home</div>
    {props.heroes.map((hero) => <Hero hero={hero} />)}
  </div>
);

Home.defaultProps = {
  heroes: [],
};

Home.propTypes = {};

export default Home;
