const HTTP_GET_HEROES = 'eduzz-challange-frontend/heroes/HTTP_GET_HEROES';
const HTTP_GET_HEROES_SUCCESS = 'eduzz-challange-frontend/heroes/HTTP_GET_HEROES_SUCCESS';
const HTTP_GET_HEROES_FAIL = 'eduzz-challange-frontend/heroes/HTTP_GET_HEROES_FAIL';

const initialState = [];
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case HTTP_GET_HEROES_SUCCESS:
      return [
        ...state,
      ];

    case HTTP_GET_HEROES_FAIL:
      return [
        ...state,
      ];

    default:
      return state;
  }
}

/*
* Actions / Epics
*/
export function getHeroes() {
  return ({ type: HTTP_GET_HEROES });
}

export function getHeroesSuccess(payload) {
  return ({ type: HTTP_GET_HEROES_SUCCESS, payload });
}

export function getHeroesFail(payload) {
  return ({ type: HTTP_GET_HEROES_FAIL, payload });
}

export function getHeroesEpic(action$, _, { Observable, apiUrl }) {
  return action$.ofType(HTTP_GET_HEROES)
    .debounceTime(1000)
    .distinctUntilChanged()
    .mergeMap((action) => Observable.fromPromise(
      fetch(`${apiUrl.search}/${action.payload}`)
        .then((response) => response.json()),
    )
      .map((response) => getHeroesSuccess(response))
      .catch((error) => Observable.of(getHeroesFail(error.response))),
    );
}
