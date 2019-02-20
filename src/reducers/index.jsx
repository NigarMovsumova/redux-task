
import {combineReducers} from 'redux';
// we do not care about the action if it's type is anything besides posts || users
const postsReducer = (state = null, action) => {

    switch (action.type) {
        case 'POSTS': {
            return action.payload;
        }
        default: {
            return state;
        }
    }
}

const usersReducer = (state = null, action) => {

    switch (action.type) {
        case 'USERS': {
            return action.payload;
        }
        default: {
            return state;
        }
    }
}



export default combineReducers({
    posts: postsReducer,
    users: usersReducer
});
