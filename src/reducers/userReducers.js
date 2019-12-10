import {
    GET_USERS_SUCCESS,
    GET_USERS_FAILED,
    GET_USERS,
    EDIT_USER,
    DELETE_USER,
    LOGIN
} from '../constants/action_types'

const initialState = {
    users: []
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            break;
        case GET_USERS:
            return { ...state }
        case GET_USERS_SUCCESS:
            return { users: action.payload.recordset }
        case GET_USERS_FAILED:
            break;
        case EDIT_USER:
            break;
        case DELETE_USER:
            break;
        default:
            return state;
    }
}

export default usersReducer;