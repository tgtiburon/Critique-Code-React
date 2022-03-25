// IMPORT ACTIONS
import  {
    UPVOTED_POSTS,
    DOWNVOTED_POSTS
} from './actions';

import { useReducer } from 'react';

export const reducer = (state, action) => {
    switch (action.type) {
        case TEST:
            return {
                ...state
            };
        default:
            return state
    }
};

export function useAppReducer(initialState) {
    return useReducer(reducer, initialState);
}