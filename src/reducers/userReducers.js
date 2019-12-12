import {
    GET_USERS_SUCCESS,
    GET_USERS_FAILED,
    ADD_USER_SUCCESS,
    ADD_USER_FAILED,
    EDIT_USER_SUCCESS,
    EDIT_USER_FAILED,
    DELETE_USER_SUCCESS,
    DELETE_USER_FAILED,
    LOGIN_SUCCESS,
    LOGIN_FAILED

} from '../constants/action_types'

const initialState = {
    users: [],
    isAuthenticated: false,
    error: "",
    userAdded: false,
    userUpdated: false,
    userDeleted: false,
    usersReceived: false
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                isAuthenticated: true,
                error: ""
            }

        case LOGIN_FAILED:
            return {
                ...state,
                error: action.payload
            }

        case GET_USERS_SUCCESS:
            return {
                ...state,
                usersReceived: true,
                users: action.payload.recordset
            }

        case GET_USERS_FAILED:
            return {
                ...state,
                error: action.payload
            }

        case ADD_USER_SUCCESS:
            return {
                ...state,
                userAdded: true
            }

        case ADD_USER_FAILED:
            return {
                ...state,
                error: action.payload
            }

        case EDIT_USER_SUCCESS:
            return {
                ...state,
                userUpdated: true
            }

        case EDIT_USER_FAILED:
            return {
                ...state,
                error: action.payload
            }

        case DELETE_USER_SUCCESS:
            return {
                ...state,
                userDeleted: true
            }

        case DELETE_USER_FAILED:
            return {
                ...state,
                error: action.payload
            }

        default:
            return state;
    }
}

export default usersReducer;