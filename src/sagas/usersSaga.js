import { takeLatest, put, all } from 'redux-saga/effects';
import { GET_USERS_SUCCESS, GET_USERS_FAILED, ADD_USER_SUCCESS, ADD_USER_FAILED, DELETE_USER_SUCCESS, DELETE_USER_FAILED } from '../constants/action_types'

const API_URL = 'http://localhost:4000'
const url1 = `${API_URL}/users`;

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
        debugger;
        const users = yield fetch(url1, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(action.payload) });
        yield put({ type: ADD_USER_SUCCESS, payload: users });
    }
    catch (err) {
        yield put({ type: ADD_USER_FAILED, payload: err, error: true });
    }
}

function* deleteUser(action) {
    try {
        debugger;
        const users = yield fetch(url1, { method: 'DELETE', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(action.payload) });
        yield put({ type: DELETE_USER_SUCCESS, payload: users });
    }
    catch (err) {
        yield put({ type: DELETE_USER_FAILED, payload: err, error: true });
    }
}

function* editUser(action) {
    try {
        debugger;
        const users = yield fetch(url1, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(action.payload) });
        yield put({ type: ADD_USER_SUCCESS, payload: users });
    }
    catch (err) {
        yield put({ type: ADD_USER_FAILED, payload: err, error: true });
    }
}

function* login(action) {
    try {
        debugger;
        const users = yield fetch(url1, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(action.payload) });
        yield put({ type: ADD_USER_SUCCESS, payload: users });
    }
    catch (err) {
        yield put({ type: ADD_USER_FAILED, payload: err, error: true });
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