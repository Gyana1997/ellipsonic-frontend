import * as types from '../config/actionTypes';
import {push} from 'react-router-redux';
import { API_URL,User } from '../config'
import axios from 'axios';

export function FormRequest(values) {
	
	return (dispatch) => {

		let data = [[values.yourname,values.date,values.fathername,values.email]]
              
		console.log("action data",data)
		axios.post( 'https://v1.nocodeapi.com/gyana123/google_sheets/lDWvzXlSTLKQeWjR?tabId=Sheet1', data, { headers:{
				'Content-Type': 'application/json'
				
			}
		})
    	.then((response) => {
    		console.log("event response",response)
			dispatch(FormRequestSuccess(response));
		})
		.catch((error) => {
			dispatch(FormRequestFailure(error));
		})
	}
	
}
export function FormRequestFailure(error) {

	return {
		type: types.FORM_REQUEST_FAILURE,
		payload: error
	};
}
export function FormRequestSuccess(value) {
	return {
		type:  types.FORM_REQUEST_SUCCESS,
		payload: value
	};
}