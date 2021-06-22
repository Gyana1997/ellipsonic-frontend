import {combineReducers} from 'redux';
import { reducer as form  } from 'redux-form';
import personalFormReducer from './personalFormReducer';


const rootReducer = combineReducers({
    form,
    personalFormReducer
});

export default rootReducer;