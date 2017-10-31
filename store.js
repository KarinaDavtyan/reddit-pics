import { createStore, applyMiddleware } from 'redux';

import logger from './middlewares/logger';
import reducers from './reducers';

const store = createStore(reducers, applyMiddleware(logger));

export default store;
