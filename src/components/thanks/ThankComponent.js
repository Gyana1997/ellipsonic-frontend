import React from 'react';
import {connect} from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { InputField } from '../../basic/InputField';
import { Checkbox } from '../../basic/Checkbox';
import { Toast } from '../../basic/Toast';
import {bindActionCreators } from 'redux';
import { FormRequestFailure, FormRequestSuccess, FormRequest } from '../../actions/FormAction';
import PropTypes from 'prop-types';
import { browserHistory } from 'react-router';


class ThankComponent extends React.Component {

    constructor(props) {
        super(props);
        this.props = props;

        this.state = {};
    }
    render() {

        return (

            <div className="formcard">
                <div className='container'>
                    <div className="row"> 
                       <span className="thanks"> Thank You </span>
                    </div>
                </div>
            </div>
            
        );
    }
}




function mapStateToProps(state, ownProps) {
    return {}
}


//determines what action available in a component
function mapDispatchToProps(dispatch) {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ThankComponent);