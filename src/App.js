import './App.css';

import React from 'react';
import { Provider } from 'react-redux'

import MiniDrawer from './components/Drawer';
import store from './reducers/store';

function App() {
	return (
		<Provider store={store}>
			<div className="App">
				<MiniDrawer/>
			</div>
		</Provider>
	);
}

export default App;
