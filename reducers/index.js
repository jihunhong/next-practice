import { HYDRATE } from 'next-redux-wrapper';
import user from './user';
import post from './post';
import { combineReducers } from 'redux';

const initialState = {
    user: {
        
    },
    post: {
        
    }
}

const rootReducer = combineReducers({
    index: (state = {}, action) => {
        switch(action.type){
            case 'HYDRATE':
                console.log('HYDRATE', action);
                return { ...state, ...action.playload };
            default:
                return state;
            }
    },
    user,
    post,
})

export default rootReducer;