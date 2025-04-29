export const SET_ACTIVE_SECTION = 'SET_ACTIVE_SECTION';

export interface SetActiveSectionAction {
  type: typeof SET_ACTIVE_SECTION;
  payload: number;
}

export const setActiveSectionIndex = (index: number): SetActiveSectionAction => ({
  type: SET_ACTIVE_SECTION,
  payload: index,
}); 