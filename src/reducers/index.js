import { combineReducers } from 'redux';
import  {displayMessageReducer} from './appReducer';

export const rootReducer = combineReducers({
    displayMessageReducer
});
