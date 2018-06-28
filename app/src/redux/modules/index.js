import { combineEpics } from 'redux-observable';
import { combineReducers } from 'redux';

import heroesReducer, { getHeroesEpic } from './heroes/heroes.reducer';
import heroDetailsReducer, { getHeroDetailsEpic } from './hero-details/hero-details.reducer';

export const rootEpic = combineEpics(
  getHeroesEpic,
  getHeroDetailsEpic,
);

export default combineReducers({
  heroes: heroesReducer,
  heroDetails: heroDetailsReducer,
});
