import { createStore, combineReducers, compose } from 'redux';
import userlogin from './userlogin.reducer';
import { loadState, saveState } from '../localStorage';
import createHistory from 'history/createBrowserHistory';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const persistedStore = loadState();
export const history = createHistory();


const store = createStore(
    combineReducers({
        userlogin
    }),      
    persistedStore,
    composeEnhancers()
);

store.subscribe(() => {
  saveState(store.getState());
});
export default store;    