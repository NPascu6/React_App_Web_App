import React, { Component } from 'react';
import { Button, Card } from 'react-bootstrap';

import AddUser from './users_custom_classes/add_user';
import EditUserModel from './users_custom_classes/edit_user_model';
import UsersTable from './users_custom_classes/users_table';

import { connect } from "react-redux";
import { getUsersAction, deleteUserAction, addUserAction, editUserAction } from '../../actions';
import NavigationHeader from '../navigation_component/navigationHeader';

class Users extends Component {

  constructor(props) {
    super(props);

    this.state = {
      users: [],
      filteredUsers: [],
      isAddMode: false,
      isEditMode: false,
      userModel: {
        userId: '',
        userName: '',
        email: '',
        FirstName: '',
        LastName: '',
        StartDate: new Date(),
        EndDate: new Date(),
        RoleName: ''
      }
    }
  }

  componentDidMount() {
    this.props.getUsers();
  }

  componentDidUpdate(previousProps) {
    if (this.props.users !== previousProps.users) {
      this.setState({ users: this.props.users });
      this.setState({ filteredUsers: this.props.users });
    }
  }

  enterAddComponent = () => {
    !this.state.isAddMode ? this.setState({ isAddMode: !this.state.isAddMode }) : this.setState({ isAddMode: this.state.isAddMode });
  }

  enterEditComponent = (action) => {
    let userId = parseInt(action.currentTarget.parentElement.firstChild.innerText);

    !this.state.isEditMode ?
      this.setState({
        isEditMode: !this.state.isEditMode,
        userModel: this.state.filteredUsers.filter(element => element.userId === userId)
      })
      :
      this.setState({ isEditMode: this.state.isEditMode });
  }

  backToUserComponent = () => {
    this.state.isAddMode ? this.setState({ isAddMode: !this.state.isAddMode }) : this.setState({ isAddMode: this.state.isAddMode });
    this.state.isEditMode ? this.setState({ isEditMode: !this.state.isEditMode }) : this.setState({ isEditMode: this.state.isEditMode });
  }

  deleteUser = (user) => {
    this.props.deleteUser(user);
    this.setState({ filteredUsers: this.state.filteredUsers.filter(userItem => userItem.userId !== parseInt(user.userId)) });
  }

  addUser = (user) => {
    this.props.addUser(user);
    this.setState({
      isAddMode: false
    });
  }

  editUser = (user) => {
    this.props.editUser(user);
    this.setState({
      isEditMode: false
    })
  }

  filterTable = (filter) => {
    let filteredUsers = this.state.users
    filteredUsers = filteredUsers.filter((user) => {
      let userName = user.FirstName.toLowerCase() + user.LastName.toLowerCase()
      return userName.indexOf(
        filter.toLowerCase()) !== -1
    })
    this.setState({
      filteredUsers
    })
  }

  render() {
    return (
      <div className="container" >
        <NavigationHeader />
        <Card>
          {
            this.state.isAddMode || this.state.isEditMode ?
              <Button
                variant="success"
                onClick={this.backToUserComponent}>Back to User List
              </Button>
              :
              <Button
                variant="success"
                onClick={this.enterAddComponent}>Add User
          </Button>
          }
          {
            this.state.isAddMode ?
              <AddUser
                filteredUsers={this.state.filteredUsers}
                addUser={this.addUser} />
              :
              !this.state.isEditMode ?
                <UsersTable
                  users={this.state.users}
                  filteredUsers={this.state.filteredUsers}
                  filterTable={this.filterTable}
                  isEditMode={this.isEditMode}
                  isAddMode={this.isAddMode}
                  deleteUser={this.deleteUser}
                  handleEditModel={this.enterEditComponent}
                  updateData={this.updateData}
                />
                : null
          }
        </Card>
        {
          this.state.isEditMode ?
            <EditUserModel
              userModel={this.state.userModel}
              editUser={this.editUser}
              users={this.state.filteredUsers}
            />
            : null
        }
      </div >
    );
  }
}

const mapStateToProps = (state) => {
  return { users: state.usersReducer.users };
};

const mapDispatchToProps = dispatch => ({
  getUsers: () => dispatch(getUsersAction()),
  deleteUser: (user) => dispatch(deleteUserAction(user)),
  addUser: (user) => dispatch(addUserAction(user)),
  editUser: (user) => dispatch(editUserAction(user))
});


export default connect(mapStateToProps, mapDispatchToProps)(Users);
