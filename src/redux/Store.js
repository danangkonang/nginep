import { createStore, combineReducers, applyMiddleware } from 'redux';
import users from './reducers/User';
import { logger } from './Middleware';

const reducers = combineReducers({
  users
})

const store = createStore(
  reducers,
  applyMiddleware(logger)
);

export default store