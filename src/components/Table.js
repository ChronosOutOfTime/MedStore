import React from "react";
import MaterialTable from "material-table";
import { resources } from '../assets/resources';

import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
const imgStyle = {width: 40, height: 40, borderRadius: '0%'};
const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1,
	},
}));

const Table = () => {
	const classes = useStyles();
	const data = resources.map(r => {
		const expDate = `${r.expMonth}/${r.expYear}`;
		return {...r, expDate: r.expMonth < 10 ? `0` + expDate : expDate};
	});
	return (
		<Grid container  justify="center" className={classes.root} spacing={2}>

			<MaterialTable
				options={{
					showTitle: false,
					paginationType: "normal",
					pageSizeOptions: [],
				}}
				actions={[
					{
						icon: 'delete',
						tooltip: 'Delete',
						onClick: (event) => alert("Delete"),
					},
					{
						icon: 'edit',
						tooltip: 'Edit',
						onClick: (event) => alert("Edit"),
					},
				]}
				columns={[
					{ title: "Thumbnail", field: 'imageUrl', sorting: false, render: rowData => rowData.imageUrl && <img src={rowData.imageUrl} alt="N.A." style={imgStyle}/> },
					{ title: "Name", field: "name" },
					{ title: "Expiration Date", field: "expDate", type: "date" },
				]}
				data={data}
				
			/>
		</Grid>
	);
};

export default Table;