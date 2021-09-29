import {FETCH_POSTS, NEW_POST} from '../actions/types'

const initialState={
    items:[],
    item:{}
}

export default function postReducer(state=initialState, action){
    switch(action.type){
        case FETCH_POSTS:
            return {
                ...state,
                items: action.payload
            };
        case NEW_POST:
            return {
                ...state,
                items: [...state.items, action.payload],
                item: action.payload
            };
        default:
            return {
                ...state
            }
    }
}
