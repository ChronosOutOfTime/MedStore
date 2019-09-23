import './App.css';

import React from 'react';
import { Provider } from 'react-redux'

import MomentUtils from '@date-io/moment';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';

import MiniDrawer from './components/Drawer';
import store from './reducers/store';

function App() {
	return (
		<Provider store={store}>
			<MuiPickersUtilsProvider utils={MomentUtils}>
				<div className="App">
					<MiniDrawer/>
				</div>
			</MuiPickersUtilsProvider>
		</Provider>
	);
}

export default App;
