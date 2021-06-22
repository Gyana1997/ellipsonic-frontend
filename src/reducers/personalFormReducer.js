import * as types from '../config/actionTypes';
import initialState from './initialState';

export default function personalFormReducer(state = initialState.personaldata, action) {
    switch(action.type) {

        case types.FORM_REQUEST_SUCCESS:
            console.log("hau",action.payload)
            return Object.assign({}, state, {
                personaldata: action.payload,
                requesting: true,
                success: true,
				error: null
			});

        case types.FORM_REQUEST_FAILURE:
        
            return Object.assign({}, state, {
                requesting: false,
                error: true,
                msg: action.payload
			});
        default:   
            return state;
    }
}