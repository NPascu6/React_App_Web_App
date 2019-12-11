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