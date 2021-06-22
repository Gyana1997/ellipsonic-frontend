import React from 'react';
import {connect} from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { InputField } from '../../basic/InputField';
import { Toast } from '../../basic/Toast';
import {bindActionCreators } from 'redux';
import { FormRequestFailure, FormRequestSuccess, FormRequest } from '../../actions/FormAction';
import PropTypes from 'prop-types';
import { browserHistory } from 'react-router';
import { Validate } from  '../../config';
import style from './personalForm.css'


class PersonalFormComponent extends React.Component {

    constructor(props) {
        super(props);
        this.props = props;

        this.state = {};
        this.handleInitialize = this.handleInitialize.bind(this);
        this.onChange = this.onChange.bind(this);
        this.redirectToDev = this.redirectToDev.bind(this);
    }
    componentWillMount() {
        //console.log("this.props",this.props);
        this.handleInitialize();
    }
    handleInitialize() {
        const personaldata = {
            "yourname": "",
            "dob": "",
            "fathername": "",
            "email": ""
        };
        this.setState({
            personaldata
        })
        // console.log("this.state",this.state);
    }
    onChange(event) {
        // console.log("state",this.state);
        // console.log("event",event.target.name);
        let yourName = event.target.name;
        let personaldata = this.state.personaldata;
        console.log('personaldata' , personaldata)
        if( yourName == "yourname" ) {
            personaldata[yourName] = event.target.value;
        }
        if ( yourName == "date" ) {
            personaldata[yourName] = event.target.value;
        }
        if ( yourName == "fathername" ) {
            personaldata[yourName] = event.target.value;
        }
        if ( yourName == "email" ) {
            personaldata[yourName] = event.target.value;
        }

        console.log("personaldata",personaldata);
        this.setState({
            personaldata
        })
    }
    submitForm() {
        //console.log("submitForm",this.props);
        this.props.FormRequest(this.state.personaldata);
        
    }
    redirectToDev() {
        // console.log("redirect",this.props);
         this.props.history.push('/thank');
    }
    render() {
        const { handleSubmit, submitting, error } = this.props;

        return (
            <div>
            
            {this.props.personaldata && 
                this.redirectToDev()
            }

            <div className="formcard">
                <div className='container'>
                        {this.props.personaldata && 
                           <Toast 
                               text="Your personal data got added successfully"
                               className = "show"
                           />
                        }
                    <div className="row">
                        <div className="col-md-4 leftcard">
                            <div className="row leftheader">
                                Enter Your personal Details !!    
                            </div>

                            <div className="row leftbody">
                                We Glad To See You
                            </div>
                        </div>  
                        <div className="col-md-8 rightcard">
                            <div className="row rightheader">
                                Add Details 
                            </div>

                                <div className="row formSection">
                                    
                                        <form onSubmit={handleSubmit(this.submitForm.bind(this))} className="myForm" >
                                            <div className="container">
                                                
                                                <div className="row formrow">
                                                    <div className="col-md-6">
                                                        <label className="labeltext">Enter Your Name</label>
                                                        <Field 
                                                            type="text"
                                                            className = "form-control event1" 
                                                            component = { InputField }
                                                            name = "yourname"
                                                            id = "yourname"
                                                            label = "Your Name" 
                                                            onChange = { this.onChange }
                                                        />
                                                    </div>
                                                    <div className="col-md-6">
                                                            <label className="labeltext">Date Of Birth</label>
                                                            <Field 
                                                                type="date"
                                                                className = "form-control event1" 
                                                                component = { InputField }
                                                                name = "date"
                                                                id = "date"
                                                                label = "" 
                                                                onChange = { this.onChange }
                                                            />
                                                    </div>
                                                </div>
                                                <div className="row formrow">
                                                        <div className="col-md-6">
                                                        
                                                            <label className="labeltext">Enter Your Father's Name</label>
                                                            <Field 
                                                                type="text"
                                                                className = "form-control event1" 
                                                                component = { InputField }
                                                                name = "fathername"
                                                                id = "fathername"
                                                                label = "Father Name" 
                                                                onChange = { this.onChange }
                                                            />
                                                        </div>
                                                        <div className="col-md-6">
                                                            <label className="labeltext">Enter Your Email Id</label>
                                                            <Field 
                                                                type="text"
                                                                className = "form-control event1" 
                                                                component = { InputField }
                                                                name = "email"
                                                                id = "email"
                                                                label = "Email@gmail.com" 
                                                                onChange = { this.onChange }
                                                            />
                                                        </div>
                                                 </div>
                                            <div className="row">
                                                <div className="col-md-9">
                                                </div>
                                                <div className="col-md-3 btnSection">
                                                    <button className="btn eventFormBtn" type="submit">Submit</button>
                                                </div>     
                                            </div>
                                            </div>
                                        </form>       
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
            
        );
    }
}

const validate = (values) => {
    const errors = {};

    if (!Validate.text(values.yourname)) {
      errors.yourname = 'Your name is required'
    }
     if (!Validate.text(values.date)) {
      errors.date = 'D.O.B is required'
    }
    if (!Validate.text(values.email)) {
      errors.email = 'Email is required'
    }
    if (!Validate.text(values.fathername)) {
      errors.fathername = 'fathername is required'
    }
    return errors;

}

let PersonalForm =  reduxForm({
    form: 'myForm', 
    validate
})(PersonalFormComponent);


//accessing state from reducer 
function mapStateToProps(state, ownProps) {
    console.log("where is data", state) 

    if (state.personalFormReducer.personaldata) {
        return {
            personaldata: state.personalFormReducer.personaldata
        }
    } else {
        return {}
    }
}

//determines what action available in a component
function mapDispatchToProps(dispatch) {

    return bindActionCreators({
        FormRequestFailure, FormRequestSuccess, FormRequest
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PersonalForm);