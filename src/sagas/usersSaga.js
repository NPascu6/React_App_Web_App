import { takeLatest, put, all, call } from 'redux-saga/effects';
import { GET_USERS_SUCCESS, GET_USERS_FAILED, ADD_USER_SUCCESS, ADD_USER_FAILED } from '../constants/action_types'

const API_URL = 'http://localhost:4000'
const url1 = `${API_URL}/users`;

function* getUsers(action) {
    try {
        const users = yield fetch(url1).then(response => response.json());
        yield put({ type: GET_USERS_SUCCESS, payload: users });
    }
    catch (err) {
        yield put({ type: GET_USERS_FAILED, payload: err, error: true });
    }
}

function* addUser(user) {
    try {
        const users = yield call(url1, { method: 'POST', data: user }).then(response => response.json());
        yield put({ type: ADD_USER_SUCCESS, payload: users });
    }
    catch (err) {
        yield put({ type: ADD_USER_FAILED, payload: err, error: true });
    }
}

function* actionWatcher() {
    yield takeLatest('GET_USERS', getUsers);
    yield takeLatest('ADD_USER', addUser);
}

export default function* usersSaga() {
    yield all([
        actionWatcher(),
    ]);
}