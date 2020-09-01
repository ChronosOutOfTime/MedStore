import React from 'react';

import Grid from '@material-ui/core/Grid';

import Table from './Table';

const DashBoard = ({medicines, expirationType, onChangeExpirationType, onChangeVisibilityEditPanel}) => {
	return (<Grid item spacing={2}>
		<Table/>
	</Grid>);
};

export default DashBoard;