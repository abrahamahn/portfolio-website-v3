<<<<<<< HEAD
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
=======
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
>>>>>>> 424dda00c1aca1e3d45dd577d0f9533266d65bd8
  type: typeof SET_ACTIVE_SECTION;
  payload: number | null;
}

<<<<<<< HEAD
// Action creator
export const setActiveSection = (activeSectionIndex: number | null): SetActiveSectionAction => ({
  type: SET_ACTIVE_SECTION,
  payload: activeSectionIndex,
});

// Initial state
=======
type AppActionTypes = SetActiveSectionAction;

export function setActiveSection(activeSectionIndex: number | null): AppActionTypes {
  return {
    type: SET_ACTIVE_SECTION,
    payload: activeSectionIndex,
  };
}

>>>>>>> 424dda00c1aca1e3d45dd577d0f9533266d65bd8
const initialState: AppState = {
  activeSectionIndex: 0,
};

<<<<<<< HEAD
// Reducer
const appReducer = (state = initialState, action: AnyAction): AppState => {
=======
function appReducer(state = initialState, action: AppActionTypes): AppState {
>>>>>>> 424dda00c1aca1e3d45dd577d0f9533266d65bd8
  switch (action.type) {
    case SET_ACTIVE_SECTION:
      return {
        ...state,
<<<<<<< HEAD
        activeSectionIndex: (action as SetActiveSectionAction).payload,
=======
        activeSectionIndex: action.payload,
>>>>>>> 424dda00c1aca1e3d45dd577d0f9533266d65bd8
      };
    default:
      return state;
  }
<<<<<<< HEAD
};

// Root reducer
=======
}

>>>>>>> 424dda00c1aca1e3d45dd577d0f9533266d65bd8
const rootReducer = combineReducers({
  app: appReducer,
});

<<<<<<< HEAD
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

=======
export type RootState = ReturnType<typeof rootReducer>;

// Define the thunk types
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, AppActionTypes>;
export type AppDispatch = ThunkDispatch<RootState, unknown, AppActionTypes>;

// Create the Redux store
const store = createStore(rootReducer, applyMiddleware(thunk));

>>>>>>> 424dda00c1aca1e3d45dd577d0f9533266d65bd8
export default store;
