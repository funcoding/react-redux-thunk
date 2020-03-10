import {MESSAGE} from '../actions';

const initialState = {
    message: ''
};

function displayMessageReducer(state=initialState, action){
    if (typeof state === 'undefined') {
        return initialState
    }
    switch (action.type) {
        case MESSAGE:
            return Object.assign({}, state, {
                message: action.text
            });
        default:
          return state
      }
}

export {displayMessageReducer};
