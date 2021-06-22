import React from 'react';
import {connect} from 'react-redux';
import './Thankyou.css';
import ThankComponent from '../components/thanks/ThankComponent';

class ThankYou extends React.Component {
    
    constructor(props, context) {
		super(props, context);
        this.props = props;
    }
    
    componentWillMount() {
        
    }

    render() {
   

        return ( 
                <ThankComponent />
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

export default connect(mapStateToProps, mapDispatchToProps)(ThankYou);
