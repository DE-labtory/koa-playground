import { combineReducers, createStore, applyMiddleware } from 'redux';
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import logger from 'redux-logger';

import playgroundReducer from './reducers/playground.reducer';
import playgroundEpic from './epic/playground.epic';

const rootReducer = combineReducers({
    playgroundReducer,
});

const rootEpic = combineEpics(
    playgroundEpic,
);

const epicMiddleware = createEpicMiddleware();

export default createStore(
    rootReducer,
    applyMiddleware(
        logger,
        epicMiddleware,
    ),
);

epicMiddleware.run(rootEpic);
