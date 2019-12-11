export const getUsersAction = () => ({
    type: 'GET_USERS',
});

export const addUserAction = (user) => ({
    type: 'ADD_USER',
    payload: user
});

export const deleteUserAction = (user) => ({
    type: 'DELETE_USER',
    payload: user
});

export const editUserAction = (user) => ({
    type: 'EDIT_USER',
    payload: user
});


/*import axios from 'axios'

const API_URL = 'http://localhost:4000'
const url1 = `${API_URL}/users`;

export function login(credentials) {

    let user = {
        userName: credentials.userName,
        password: credentials.password,
        email: credentials.email
    }

    axios.post(url1, {
        data: user
    }).then((response) => {
        this.initialState.users = true;
    }).catch(function (error) {
        console.log(error);
    });

    return {
        type: LOGIN,
        payload: "Loged In"
    }
}

export function getUsersAction() {
    debugger;
    let users = []
    
    return {
        type: GET_USERS_SUCCESS,
        payload: users
    }
}

export function addUser(data) {

    axios.post(url1, {
        data
    }).then(function (response) {
        console.log(response);
    }).catch(function (error) {
        console.log(error);
    });

    return {
        type: ADD_USER,
        payload: "User Added"
    }
}

export function editUser(user) {

    axios.put(url1, {
        data: user
    }).then(function (response) {
        console.log(response);
    }).catch(function (error) {
        console.log(error);
    });

    return {
        type: EDIT_USER,
        payload: "User Edited"
    }
}

export function deleteUser(payload) {

    axios.delete(url1, {
        data: payload
    }).then(() => {
        this.setState({ isEditMode: false, addUser: false });
    })

    return {
        type: DELETE_USER,
        payload: "User Deleted"
    }
}*/