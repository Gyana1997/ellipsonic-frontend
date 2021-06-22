import React from 'react';
import {connect} from 'react-redux';
import './PageForm.css';
import PersonalFormComponent from '../components/Personal/PersonalFormComponent';


class PageForm extends React.Component {
    
    constructor(props, context) {
		super(props, context);
        this.props = props;
    }
    
    componentWillMount() {
        
    }

    render() {
        const { classes } = this.props;

        return ( 
                <PersonalFormComponent onSubmit={this.submitHandler} { ...this.props} />
        );
    }
}

//accessing state from reducer 
function mapStateToProps(state, ownProps) {
	return {

	}
}

//determines what action available in a component
function mapDispatchToProps(dispatch) {
	return {

	}
}

export default connect(mapStateToProps, mapDispatchToProps)(PageForm);
