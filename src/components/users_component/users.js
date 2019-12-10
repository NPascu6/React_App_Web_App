import React, { Component } from 'react';
import { Button, Card } from 'react-bootstrap';

import AddUser from './users_custom_classes/add_user';
import EditUserModel from './users_custom_classes/edit_user_model';
import UsersTable from './users_custom_classes/users_table';

import { connect } from "react-redux";
import { getUsersAction } from '../../actions';

class Users extends Component {

  constructor(props) {
    super(props);

    this.state = {
      users: [],
      addUser: false,
      isEditMode: false,
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

  updateData = (data) => {
    this.setState({ users: data });
  }

  backToUserComponent = () => {
    this.state.addUser ? this.setState({ addUser: !this.state.addUser }) : this.setState({ addUser: this.state.addUser });
    this.state.isEditMode ? this.setState({ isEditMode: !this.state.isEditMode }) : this.setState({ adisEditModedUser: this.state.isEditMode });
  }

  enterAddComponent = () => {
    !this.state.addUser ? this.setState({ addUser: !this.state.addUser }) : this.setState({ addUser: this.state.addUser });
    console.log(this.state.users)
  }

  componentDidMount() {
    this.props.getUsers();
  }

  componentDidUpdate(previousProps) {
    if (this.props.users !== previousProps.users) {
      this.setState({ users: this.props.users });
    }
  }

  handleEditModel = (e) => {
    this.setState({
      isEditMode: !this.state.isEditMode,
      userId: e.currentTarget.childNodes[0].innerText,
      userName: e.currentTarget.childNodes[1].innerText,
      email: e.currentTarget.childNodes[2].innerText,
      FirstName: e.currentTarget.childNodes[3].innerText,
      LastName: e.currentTarget.childNodes[4].innerText,
      StartDate: e.currentTarget.childNodes[5].innerText,
      EndDate: e.currentTarget.childNodes[6].innerText,
      RoleName: e.currentTarget.childNodes[7].innerText
    });
  }

  render() {
    return (
      <div className="container" >
        <Card>
          {
            this.state.addUser || this.state.isEditMode ?
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
                  addUser={this.addUser}
                  deleteUser={this.deleteUser}
                  handleEditModel={this.handleEditModel}
                  updateData={this.updateData}
                />
                : null
          }
        </Card>
        {
          this.state.isEditMode ?
            <EditUserModel
              userId={this.state.userId}
              userName={this.state.userName}
              email={this.state.email}
              FirstName={this.state.FirstName}
              LastName={this.state.LastName}
              StartDate={this.state.StartDate}
              EndDate={this.state.EndDate}
              RoleName={this.state.RoleName}
              editUser={this.editUser}
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
});


export default connect(mapStateToProps, mapDispatchToProps)(Users);
