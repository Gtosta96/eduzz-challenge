import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Hero.css';

const Hero = (props) => (
  <Link to={`/hero-details/${props}`} className={styles.item}>
    <div>Hero</div>
  </Link>
);

Hero.defaultProps = {};
Hero.propTypes = {};

export default Hero;
