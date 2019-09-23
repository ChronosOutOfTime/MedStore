import MuiDownshift from 'mui-downshift';
import React from 'react'

import Grid from '@material-ui/core/Grid';

const EditForm = ({
	name = "name",
}) => {
	return <Grid>
		<MuiDownshift/>
	</Grid>;
}

export default EditForm;
