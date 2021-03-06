import { takeLatest, put, all } from 'redux-saga/effects';
import {
    GET_USERS_SUCCESS,
    GET_USERS_FAILED,
    ADD_USER_SUCCESS,
    ADD_USER_FAILED,
    DELETE_USER_SUCCESS,
    DELETE_USER_FAILED,
    EDIT_USER_SUCCESS,
    EDIT_USER_FAILED,
    LOGIN_SUCCESS,
    LOGIN_FAILED
} from '../constants/action_types'

const API_URL = ' http://192.168.122.104:4000'
const url1 = `${API_URL}/users`;
const url2 = `${API_URL}/login`;

function* getUsers() {
    try {
        const users = yield fetch(url1).then(response => response.json());
        yield put({ type: GET_USERS_SUCCESS, payload: users });
    }
    catch (err) {
        yield put({ type: GET_USERS_FAILED, payload: err, error: true });
    }
}

function* addUser(action) {
    try {
        yield fetch(url1, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(action.payload) }).then(response => response.json());
        yield put({ type: ADD_USER_SUCCESS });
    }
    catch (err) {
        yield put({ type: ADD_USER_FAILED, payload: err, error: true });
    }
}

function* deleteUser(action) {
    try {
        yield fetch(url1, { method: 'DELETE', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(action.payload) }).then(response => response.json());
        yield put({ type: DELETE_USER_SUCCESS });
    }
    catch (err) {
        yield put({ type: DELETE_USER_FAILED, payload: err, error: true });
    }
}

function* editUser(action) {
    try {
        yield fetch(url1, { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(action.payload) }).then(response => response.json());
        yield put({ type: EDIT_USER_SUCCESS });
    }
    catch (err) {
        yield put({ type: EDIT_USER_FAILED, payload: err, error: true });
    }
}

function* login(action) {
    try {
        var user = yield fetch(url2, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(action.payload) }).then(response => response.json());
        user.rowsAffected[0] === 1 ? yield put({ type: LOGIN_SUCCESS, payload: user }) : yield put({ type: LOGIN_FAILED, payload: "Authentification failed" });
    }
    catch (err) {
        yield put({ type: LOGIN_FAILED, payload: err, error: true });
    }
}

function* actionWatcher() {
    yield takeLatest('GET_USERS', getUsers);
    yield takeLatest('ADD_USER', addUser);
    yield takeLatest('DELETE_USER', deleteUser);
    yield takeLatest('EDIT_USER', editUser);
    yield takeLatest('LOGIN', login)
}

export default function* usersSaga() {
    yield all([
        actionWatcher(),
    ]);
}