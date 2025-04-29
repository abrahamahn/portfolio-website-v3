import { createStore, combineReducers, applyMiddleware, AnyAction } from 'redux';
import { thunk, ThunkAction } from 'redux-thunk';

// Define the state type
export interface AppState {
  activeSectionIndex: number | null;
}

// Action type
const SET_ACTIVE_SECTION = 'SET_ACTIVE_SECTION';

// Action interface
interface SetActiveSectionAction extends AnyAction {
  type: typeof SET_ACTIVE_SECTION;
  payload: number | null;
}

// Action creator
export const setActiveSection = (activeSectionIndex: number | null): SetActiveSectionAction => ({
  type: SET_ACTIVE_SECTION,
  payload: activeSectionIndex,
});

// Initial state
const initialState: AppState = {
  activeSectionIndex: 0,
};

// Reducer
const appReducer = (state = initialState, action: AnyAction): AppState => {
  switch (action.type) {
    case SET_ACTIVE_SECTION:
      return {
        ...state,
        activeSectionIndex: (action as SetActiveSectionAction).payload,
      };
    default:
      return state;
  }
};

// Root reducer
const rootReducer = combineReducers({
  app: appReducer,
});

// Export RootState type
export type RootState = ReturnType<typeof rootReducer>;

// Define AppThunk type
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  AnyAction
>;

// Create store
const store = createStore(rootReducer, applyMiddleware(thunk));

// Export AppDispatch type
export type AppDispatch = typeof store.dispatch;

export default store;
