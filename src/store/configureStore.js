import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
// import reducers
import authentication from './authentication';
import jams from './jams';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducer = combineReducers({
  authentication,
  jams
});



const configureStore = defaultState => {
  return createStore(
    reducer,
    defaultState,
    composeEnhancers(applyMiddleware(thunk))
  );
};

export default configureStore;
