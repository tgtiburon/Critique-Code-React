// IMPORT ACTIONS
import  {
    UPVOTED_POSTS,
    DOWNVOTED_POSTS,
    UPDATE_TIMELINE,
    SET_FILTER,
    REDUCE_TIMELINE,
    UPDATE_USER,
    SET_POST
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
            };
        case UPDATE_USER:
            return {
                ...state,
                userData: action.userData
            };
        case SET_POST:
            return {
                ...state,
                activePost: action.activePost
            }
        default:
            return state
    }
};

export function useAppReducer(initialState) {
    return useReducer(reducer, initialState);
}