import { createStore, combineReducers, compose } from 'redux';
import userlogin from './userlogin.reducer';
import persistState from 'redux-localstorage';
import { loadState, saveState } from '../localStorage';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const persistedStore = loadState();
console.log('persistedStore', persistedStore) 
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