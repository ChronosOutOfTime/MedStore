import './App.css';

import React from 'react';
import { Provider } from 'react-redux';

import MomentUtils from '@date-io/moment';
import { Grid } from '@material-ui/core';
import {ThemeProvider} from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';

import Header from './components/Header';
import Modals from './components/Modals';
import Home from './components/landingPage/Home';
import store from './reducers/store';

const theme = createMuiTheme({
	palette: {
		type: 'light',
	},
});

function App() {

	return (
		<Provider store={store}>
			<ThemeProvider theme={theme}>
				<MuiPickersUtilsProvider utils={MomentUtils}>
					<Grid container direction="column">
						<Grid item >
							<Header/>
						</Grid>
						<Grid item style={{width: "100%", textAlign: "center"}}>
							<Home/>
						</Grid>
						<Grid>
							<Modals/>
						</Grid>
					</Grid>
				</MuiPickersUtilsProvider>
			</ThemeProvider>
		</Provider>
	);
}

export default App;