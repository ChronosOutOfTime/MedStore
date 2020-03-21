import './App.css';

import React from 'react';
import { Provider } from 'react-redux';
import Container from '@material-ui/core/Container';

import MomentUtils from '@date-io/moment';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';

import MiniDrawer from './components/DrawerPermanent';
import store from './reducers/store';


function App() {
	return (
		<Container fixed>
			<Provider store={store}>
				<MuiPickersUtilsProvider utils={MomentUtils}>
					<MiniDrawer/>
				</MuiPickersUtilsProvider>
			</Provider>
		</Container>
	);
}

export default App;
