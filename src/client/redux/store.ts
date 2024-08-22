import thunk, { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { 
  createStore, 
  combineReducers, 
  applyMiddleware 
} from 'redux';

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
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, AppActionTypes>;
export type AppDispatch = ThunkDispatch<RootState, unknown, AppActionTypes>;

// Create the Redux store
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
