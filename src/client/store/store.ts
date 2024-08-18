import thunk, { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { 
  createStore, 
  combineReducers, 
  applyMiddleware 
} from 'redux';
// Define the initial state interface
interface AppState {
  activeSectionIndex: number | null;
}

// Define the actions
const SET_ACTIVE_SECTION = 'SET_ACTIVE_SECTION';

interface SetActiveSectionAction {
  type: typeof SET_ACTIVE_SECTION;
  payload: number | null;
}

type AppActionTypes = SetActiveSectionAction;

// Define the action creators
export function setActiveSection(activeSectionIndex: number | null): AppActionTypes {
  return {
    type: SET_ACTIVE_SECTION,
    payload: activeSectionIndex,
  };
}

// Define the reducer
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

// Create the root reducer
const rootReducer = combineReducers({
  app: appReducer,
});

// Define the root state type
export type RootState = ReturnType<typeof rootReducer>;

// Define the thunk types
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, AppActionTypes>;
export type AppDispatch = ThunkDispatch<RootState, unknown, AppActionTypes>;

// Create the Redux store
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
