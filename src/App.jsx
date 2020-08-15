import './App.css';

import React from 'react';
import { Provider } from 'react-redux';

import MomentUtils from '@date-io/moment';
import { Grid } from '@material-ui/core';
import {ThemeProvider} from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';

import Header from './components/Header';
import Login from './components/login/Login';
import SignUp from './components/login/Signup';
import store from './reducers/store';

// import Main from './components/landingPage/Home';




// import CssBaseline from '@material-ui/core/CssBaseline';
// import { makeStyles } from '@material-ui/core/styles';
// import Main from './components/DrawerPermanent';

// const useStyles = makeStyles(theme => ({
// 	root: {
// 		display: 'flex',
// 	},
// }));

const theme = createMuiTheme({
	palette: {
		type: 'light',
	},
});

function App() {
	// const classes = useStyles();

	return (
		<Provider store={store}>
			<ThemeProvider theme={theme}>
				<MuiPickersUtilsProvider utils={MomentUtils}>
					<Grid container direction="column">
						<Grid item >
							<Header/>
						</Grid>
						<Grid item container>
							<Login/>
							<SignUp/>
						</Grid>
					</Grid>
				</MuiPickersUtilsProvider>
			</ThemeProvider>
		</Provider>
	);
}

export default App;