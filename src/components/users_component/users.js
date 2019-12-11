import React, { Component } from 'react';
import { Button, Card } from 'react-bootstrap';

import AddUser from './users_custom_classes/add_user';
import EditUserModel from './users_custom_classes/edit_user_model';
import UsersTable from './users_custom_classes/users_table';

import { connect } from "react-redux";
import { getUsersAction, deleteUserAction, addUserAction, editUserAction } from '../../actions';

class Users extends Component {

  constructor(props) {
    super(props);

    this.state = {
      users: [],
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
    }
  }

  enterAddComponent = () => {
    !this.state.isAddMode ? this.setState({ isAddMode: !this.state.isAddMode }) : this.setState({ isAddMode: this.state.isAddMode });
    console.log(this.state.users)
  }

  enterEditComponent = (action) => {
    let userId = parseInt(action.currentTarget.firstChild.innerText);

    !this.state.isEditMode ? this.setState({
      isEditMode: !this.state.isEditMode,
      userModel: this.state.users.filter(element => element.userId === userId)
    })
      : this.setState({ isEditMode: this.state.isEditMode });
  }

  backToUserComponent = () => {
    this.state.isAddMode ? this.setState({ isAddMode: !this.state.isAddMode }) : this.setState({ isAddMode: this.state.isAddMode });
    this.state.isEditMode ? this.setState({ isEditMode: !this.state.isEditMode }) : this.setState({ adisEditModedUser: this.state.isEditMode });
  }

  deleteUser = (user) => {
    this.props.deleteUser(user);
    this.setState({ users: this.state.users.filter(userItem => userItem.userId !== parseInt(user.userId)) });
  }

  addUser = (user) => {
    this.props.addUser(user);
    this.setState({ isAddMode: false });
  }

  editUser = (user) => {
    debugger;
    this.props.editUser(user);
    this.setState({ isEditMode: false })
  }

  render() {
    return (
      <div className="container" >
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
            this.state.addUser ?
              <AddUser
                data={this.state.users}
                addUser={this.addUser} />
              :
              !this.state.isEditMode ?
                <UsersTable
                  users={this.state.users}
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
              users = {this.state.users}
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
