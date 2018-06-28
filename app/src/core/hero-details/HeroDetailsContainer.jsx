import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import HeroDetails from './HeroDetails';

class HeroDetailsContainer extends PureComponent {
  componentDidMount() {
    this.props.getHeroDetails();
  }

  render() {
    return (
      <HeroDetails {...this.props} />
    );
  }
}

const mapStateToProps = (state) => (
  state
);

const mapDispatchToProps = ({});

HeroDetailsContainer.defaultProps = {};

HeroDetailsContainer.propTypes = {
  getHeroDetails: PropTypes.func.isRequired,
};


export default connect(mapStateToProps, mapDispatchToProps)(HeroDetailsContainer);
