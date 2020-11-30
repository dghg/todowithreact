import { createStore, applyMiddleware } from "redux"
import RootReducer from '../reducers';
import {composeWithDevTools} from 'redux-devtools-extension';
import {createLogger} from 'redux-logger';
// import createSagaMiddleware from 'redux-saga';
// import rootSaga from '../sagas';
// const sagaMw = createSagaMiddleware()
const configureStore = () => {
  const store = createStore(RootReducer,
    composeWithDevTools(applyMiddleware(createLogger()))
    );

  return store;
}

export default configureStore;
