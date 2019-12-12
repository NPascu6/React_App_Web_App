import { combineReducers, createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';

import usersReducer from '../reducers/userReducers';
import navigationReducer from '../reducers/navigationReducers';
import rootSaga from '../sagas/usersSaga';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
}

const rootReducer = combineReducers({
    usersReducer: usersReducer,
    navigationReducer: navigationReducer
});

const store = createStore(
    rootReducer,
    applyMiddleware(...middlewares),
);

sagaMiddleware.run(rootSaga);

export default store;