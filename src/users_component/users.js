import React, { Component } from 'react';
import axios from 'axios';
import AddUser from './users_custom_classes/add_user'
import EditUserModel from './users_custom_classes/edit_user_model'
import { Button, Card } from 'react-bootstrap'
import UsersTable from './users_custom_classes/users_table';

const API_URL = 'http://localhost:4000'
const url1 = `${API_URL}/users`;

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

  getUsers = () => {
    axios.get(url1).then(response => response.data)
      .then((data) => {
        this.setState({ users: data.recordset });
      })
  }

  addUser = (data) => {
    axios.post(url1, {
      data
    }).then(function (response) {
      console.log(response);
    }).catch(function (error) {
      console.log(error);
    });
  }

  editUser = (user) => {
    axios.put(url1, {
      data: user
    }).then(function (response) {
      console.log(response);
    }).catch(function (error) {
      console.log(error);
    });
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
  }

  deleteUser = (user) => {
    axios.delete(url1, {
      data: user
    }).then(() => {
      this.setState({ isEditMode: false, addUser: false });
    })
  }

  handleEditModel = (e) => {
    debugger
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
                  getUsers={this.getUsers}
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
export default Users;
