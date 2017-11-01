import { createStore, applyMiddleware } from 'redux';

import logger from './middlewares/logger';
import api from './middlewares/api';
import reducers from './reducers';

const store = createStore(reducers, applyMiddleware(api, logger));

export default store;
