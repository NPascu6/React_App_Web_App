import React, { Component } from 'react';
import { connect } from "react-redux";

class ErrorScreen extends Component{
    render(){
        return(
        <div>{this.props.error}</div>
        )
    }
}

const mapStateToProps = (state) => {
    return { error: state.usersReducer.error };
  };

export default connect(mapStateToProps)(ErrorScreen);