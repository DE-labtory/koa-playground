import logger from 'redux-logger';
import { applyMiddleware } from 'redux';

export default applyMiddleware(
    logger,
)