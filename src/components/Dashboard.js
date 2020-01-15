import React from 'react';

import Grid from '@material-ui/core/Grid';

import ExpirationList from './ExpirationList';
import Table from './Table';

const DashBoard = ({medicines, expirationType, onChangeExpirationType, onChangeVisibilityEditPanel}) => {
	return (<Grid container  spacing={2}>
		<ExpirationList
			title="Medicines"
			medicines={medicines}
			expirationType={expirationType}
			onChangeExpirationType={onChangeExpirationType}
			onChangeVisibilityEditPanel={onChangeVisibilityEditPanel}
		/>
		<Table/>
	</Grid>);
}

export default DashBoard;