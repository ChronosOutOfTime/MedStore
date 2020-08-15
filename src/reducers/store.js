import { combineReducers, createStore } from 'redux';

import medicines from './medicines';
import user from './user';

const appReducers = combineReducers({
	medicines,
	user,
});
const store = createStore(
	appReducers,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
export default store;