import { createStore } from 'redux';
import RootReducers from './reducer';

const store = createStore(
    RootReducers, /* preloadedState, */
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

export default store;