import { combineReducers, createStore } from 'redux';

import medicines from './medicines';

const appReducers = combineReducers({
	medicines,
});
const store = createStore(
	appReducers,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
export default store;