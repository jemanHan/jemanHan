import type { Actions } from "./actions";
import type { AppState } from "./Appstate";

const initialAppState = {
  today: new Date(),
};

export const rootReducer = (
  state: AppState = initialAppState,
  action: Actions
) => {
  switch (action.type) {
    case "setToday": {
      return { ...state, today: action.today };
    }
  }
  /* eslint-disable default-case */
  return state;
  /* eslint-enable default-case */
};
