import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { changeTabAction } from '../../actions/navigationActions';
import LogoutComponent from '../custom_components/logoutComponent';
import styles from '../../styles/navigation';

class NavigationHeader extends Component {

    changeTab = (action) => {
        let nextTab = action.target.innerText;
        this.props.changeTab(nextTab)
    }

    render() {
        return (
            <ul className="nav nav-tabs">
                <li onClick={this.props.nextTab === "Users" ? this.changeTab : null}>
                    <Link to="/home" href="/" style={ this.props.isActive === true ? styles.notActive : styles.active } >Home</Link>
                </li>
                <li onClick={this.props.nextTab === "Home" ? this.changeTab : null}>
                    <Link to="/users" href="/users" style={ this.props.isActive === true ? styles.active : styles.notActive }>Users</Link>
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