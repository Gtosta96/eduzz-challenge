import React from 'react';

import { Provider } from 'react-redux';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { hot } from 'react-hot-loader';

import configureStore from './redux/configureStore';

import HomeContainer from './core/home/HomeContainer';
import HeroDetailsContainer from './core/hero-details/HeroDetailsContainer';

import './styles/index.css';

const store = configureStore();

const Root = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/" component={HomeContainer} />
        <Route path="/details/:hero" component={HeroDetailsContainer} />
      </Switch>
    </BrowserRouter>
  </Provider>
);

export default hot(module)(Root);
