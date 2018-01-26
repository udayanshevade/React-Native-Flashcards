import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer, { initialState } from './reducers';

const middleWares = [thunk];

const composedMiddlewares = compose(
  applyMiddleware(...middleWares)
);

const store = createStore(
  reducer,
  initialState,
  composedMiddlewares
);

export default store;
