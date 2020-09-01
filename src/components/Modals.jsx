import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Dialog from '@material-ui/core/Dialog';

import { onToggleModals } from '../actions/user';
import { showModalsSelector } from '../selectors/user';
import SignIn from './login/SignIn';
import SignUp from './login/Signup';

function Modals({
	showModals = false,
	onToggleModals = () => {},
}) {
	return (
		<Dialog open={showModals} onClose={() => onToggleModals()}>
			<SignIn/>
			<SignUp/>
		</Dialog>
	);
}



const signInSelectors = createStructuredSelector({
	showModals: showModalsSelector,
});

const mapStateToProps = (state) => signInSelectors(state);
const mapDispatchToProps = {
	onToggleModals,
};

const ModalsConnected = connect(
	mapStateToProps,
	mapDispatchToProps,
)(Modals);

export default ModalsConnected;