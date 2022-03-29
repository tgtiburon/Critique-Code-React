// IMPORT ACTIONS
import  {
    UPVOTED_POSTS,
    DOWNVOTED_POSTS,
    UPDATE_TIMELINE,
    SET_FILTER,
    REDUCE_TIMELINE
} from './actions';

import { useReducer } from 'react';

export const reducer = (state, action) => {
    switch (action.type) {
        case UPDATE_TIMELINE:
            return {
                ...state,
                activeTimeline: [...action.activeTimeline]
            };
        case REDUCE_TIMELINE:
            return {
                ...state,
                reducedTimeline: [...action.activeTimeline]
            };
        case SET_FILTER:
            return {
                ...state,
                activeFilter: action
            }
        default:
            return state
    }
};

export function useAppReducer(initialState) {
    return useReducer(reducer, initialState);
}