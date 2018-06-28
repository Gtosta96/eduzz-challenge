import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import { getHeroes } from '../../redux/modules/heroes/heroes.reducer';

import Home from './Home';

class HomeContainer extends PureComponent {
  componentDidMount() {
    this.props.getHeroes();
  }

  render() {
    return (
      <Home {...this.props} />
    );
  }
}

const mapStateToProps = (state) => ({
  heroes: state.heroes,
});

const mapDispatchToProps = ({
  getHeroes,
});

HomeContainer.defaultProps = {};

HomeContainer.propTypes = {
  location: PropTypes.shape({
    search: PropTypes.string,
    hash: PropTypes.string,
  }).isRequired,
  getHeroes: PropTypes.func.isRequired,
};


export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
