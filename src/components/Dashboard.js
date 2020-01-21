import React from 'react';

import Grid from '@material-ui/core/Grid';

import Table from './Table';

/*
import ExpirationList from './ExpirationList';
<ExpirationList
			title="Medicines"
			medicines={medicines}
			expirationType={expirationType}
			onChangeExpirationType={onChangeExpirationType}
			onChangeVisibilityEditPanel={onChangeVisibilityEditPanel}
		/>
*/
const DashBoard = ({medicines, expirationType, onChangeExpirationType, onChangeVisibilityEditPanel}) => {
	return (<Grid container spacing={2}>
		<Table/>
	</Grid>);
}

export default DashBoard;