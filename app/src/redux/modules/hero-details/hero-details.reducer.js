const HTTP_GET_HERO_DETAILS = 'eduzz-challange-frontend/hero-details/HTTP_GET_HERO_DETAILS';
const HTTP_GET_HERO_DETAILS_SUCCESS = 'eduzz-challange-frontend/hero-details/HTTP_GET_HERO_DETAILS_SUCCESS';
const HTTP_GET_HERO_DETAILS_FAIL = 'eduzz-challange-frontend/hero-details/HTTP_GET_HERO_DETAILS_FAIL';

const initialState = [];
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case HTTP_GET_HERO_DETAILS_SUCCESS:
      return [
        ...state,
      ];

    case HTTP_GET_HERO_DETAILS_FAIL:
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
export function getHeroDetails() {
  return ({ type: HTTP_GET_HERO_DETAILS });
}

export function getHeroDetailsSuccess(payload) {
  return ({ type: HTTP_GET_HERO_DETAILS_SUCCESS, payload });
}

export function getHeroDetailsFail(payload) {
  return ({ type: HTTP_GET_HERO_DETAILS_FAIL, payload });
}

export function getHeroDetailsEpic(action$, _, { Observable, apiUrl }) {
  return action$.ofType(HTTP_GET_HERO_DETAILS)
    .debounceTime(1000)
    .distinctUntilChanged()
    .mergeMap((action) => Observable.fromPromise(
      fetch(`${apiUrl.search}/${action.payload}`)
        .then((response) => response.json()),
    )
      .map((response) => getHeroDetailsSuccess(response))
      .catch((error) => Observable.of(getHeroDetailsFail(error.response))),
    );
}
