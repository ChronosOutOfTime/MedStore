// import MuiDownshift from 'mui-downshift';

import React, { useState } from 'react'

import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import {KeyboardDatePicker} from '@material-ui/pickers';

const useStyles = makeStyles(theme => ({
	root: {
		alignItems: "center",
		padding: "8px",
		display: "flex",
		flexWrap: 'wrap',
	},
	textField: {
		width: "100%",
	},
}));
const EditForm = ({
	name = "name",
}) => {
	const classes = useStyles();
	const [selectedDate, handleDateChange] = useState(new Date());

	return <Grid className={classes.root}>
		<TextField
			className={classes.textField}
			id="standard-search"
			label="Name"
			type="search"
			margin="normal"/>
		<KeyboardDatePicker
			autoOk
			variant="inline"
			format="MM/YYYY"
			margin="normal"
			id="date-picker-inline"
			label="Date picker inline"
			value={selectedDate}
			onChange={handleDateChange}
			views={["year", "month"]}
			keyboardbuttonprops={{
				'aria-label': 'change date',
			}}
		/>
	</Grid>;
}

export default EditForm;
