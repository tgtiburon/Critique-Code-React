// IMPORT ACTIONS
import  {
    UPVOTED_POSTS,
    DOWNVOTED_POSTS,
    UPDATE_TIMELINE
} from './actions';

import { useReducer } from 'react';

export const reducer = (state, action) => {
    switch (action.type) {
        case UPDATE_TIMELINE:
            return {
                ...state,
                activeTimeline: [...action.posts]
            };
        default:
            return state
    }
};

export function useAppReducer(initialState) {
    return useReducer(reducer, initialState);
}