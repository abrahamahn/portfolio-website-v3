import { createStore, combineReducers, applyMiddleware, Middleware, Store, Reducer } from 'redux';
import { thunk } from 'redux-thunk';
import type { ThunkAction, ThunkDispatch } from 'redux-thunk';
import type { AnyAction } from 'redux';

interface AppState {
  activeSectionIndex: number | null;
}

const SET_ACTIVE_SECTION = 'SET_ACTIVE_SECTION';

interface SetActiveSectionAction {
  type: typeof SET_ACTIVE_SECTION;
  payload: number | null;
}

type AppActionTypes = SetActiveSectionAction;

export function setActiveSection(activeSectionIndex: number | null): AppActionTypes {
  return {
    type: SET_ACTIVE_SECTION,
    payload: activeSectionIndex,
  };
}

const initialState: AppState = {
  activeSectionIndex: 0,
};

function appReducer(state = initialState, action: AppActionTypes): AppState {
  switch (action.type) {
    case SET_ACTIVE_SECTION:
      return {
        ...state,
        activeSectionIndex: action.payload,
      };
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  app: appReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

// Define the thunk types
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, AnyAction>;
export type AppDispatch = ThunkDispatch<RootState, unknown, AnyAction>;

// Create the Redux store with proper typing
const store: Store<RootState, AnyAction> = createStore(
  rootReducer as unknown as Reducer<RootState, AnyAction>,
  applyMiddleware(thunk as unknown as Middleware)
);

export default store;
