import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { changeTabAction } from '../../actions/navigationActions';
import LogoutComponent from '../custom_components/logoutComponent';

class NavigationHeader extends Component {

    changeTab = (action) => {
        debugger;
        let nextTab = action.target.innerText;

        this.props.changeTab(nextTab)
    }

    render() {
        debugger;
        return (
            <ul className="nav nav-tabs">
                <li onClick={this.changeTab}>
                    <Link to="/home" href="/" style={{ border: this.props.isActive === false ? '1px solid' : 'none' }} >Home</Link>
                </li>
                <li onClick={this.changeTab}>
                    <Link to="/users" href="/users" style={{ border: this.props.isActive === true ? '1px solid' : 'none' }}>Users</Link>
                </li>
                <li>
                    <LogoutComponent />
                </li>
            </ul>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    changeTab: (nextTab) => dispatch(changeTabAction(nextTab))
});

const mapStateToProps = (state) => {
    return {
        isActive: state.navigationReducer.isActive,
        nextTab: state.navigationReducer.nextTab
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavigationHeader);