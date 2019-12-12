import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { connect } from "react-redux";
import { Redirect } from 'react-router-dom';
import {logoutAction} from '../../actions/index';

class LogoutComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            logOut: false
        }
    }
    componentDidUpdate() {
        this.setState({ logOut: false })
    }

    logout = () => {
        this.props.logout()
        this.setState({ logOut: true })
    }

    render() {
        if (this.state.logOut === true) {
            this.setState({ logOut: false })
            return <Redirect to='/' />
        }

        return (
            <Button style={{ position: 'relative', left: '64.4em' }} variant="danger" onClick={this.logout}>Logout</Button>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logoutAction())
});

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.usersReducer.isAuthenticated,
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(LogoutComponent);