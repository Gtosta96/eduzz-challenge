import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import Hero from './Hero';

class HeroContainer extends PureComponent {
  render() {
    return (
      <Hero {...this.props} />
    );
  }
}

const mapStateToProps = (state) => (
  state
);

const mapDispatchToProps = ({});

HeroContainer.defaultProps = {};

HeroContainer.propTypes = {
  location: PropTypes.shape({
    search: PropTypes.string,
    hash: PropTypes.string,
  }).isRequired,
  getHeroes: PropTypes.func.isRequired,
};


export default connect(mapStateToProps, mapDispatchToProps)(HeroContainer);
