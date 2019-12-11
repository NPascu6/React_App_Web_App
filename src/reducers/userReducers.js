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
    userToAdd: {}
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {

        case LOGIN_SUCCESS:
            return {
                ...state
            }

        case LOGIN_FAILED:
            return {
                ...state
            }

        case GET_USERS_SUCCESS:
            return {
                users: action.payload.recordset
            }

        case GET_USERS_FAILED:
            return {
                ...state
            }

        case ADD_USER_SUCCESS:
            return {
                ...state
            }

        case ADD_USER_FAILED:
            return {
                ...state
            }

        case EDIT_USER_SUCCESS:
            return {
                ...state
            }

        case EDIT_USER_FAILED:
            return {
                ...state
            }

        case DELETE_USER_SUCCESS:
            return {
                ...state
            }

        case DELETE_USER_FAILED:
            return {
                ...state
            }

        default:
            return state;
    }
}

export default usersReducer;