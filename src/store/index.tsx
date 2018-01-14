import { Platform } from 'react-native';
import { applyMiddleware, compose, createStore } from 'redux';
import promise from 'redux-promise';
import thunk from 'redux-thunk';
import devTools from 'remote-redux-devtools';

import RootReducer from './reducers';

const middleware = [thunk, promise];

if (__DEV__) {
    const { createLogger } = require('redux-logger');
    const logger = createLogger({ diff: true, collapsed: true });

    middleware.push(logger);
}

const enhancers = [];

const Store = createStore(
    RootReducer,
    compose(
        applyMiddleware(...middleware),
        ...enhancers,
        devTools({
            name: Platform.OS,
            hostname: 'localhost',
            suppressConnectErrors: false
        }),
    )
);

export default Store;
