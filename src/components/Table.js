import React from "react";
import MaterialTable from "material-table";
import yogurtImg from "../assets/yogurt.jpg";
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
const imgStyle = {width: 40, height: 40, borderRadius: '0%'};
const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1,
	},
}));
/**
 * components={{
					Pagination: props => (
						<div>
							pagination
						</div>
					),
				}}
 */
const Table = () => {
	const classes = useStyles();
	const data = [
		{ name: "TachiFlu", 	imageUrl: yogurtImg, expirationDate: "02/2021" },
		{ name: "Tachipirina", 	imageUrl: yogurtImg, expirationDate: "02/2021" },
		{ name: "Vivin C", 	imageUrl: yogurtImg, expirationDate: "02/2021" },
		{ name: "Medicina 1", 	imageUrl: yogurtImg, expirationDate: "02/2021" },
		{ name: "Medicina 2", 	imageUrl: yogurtImg, expirationDate: "02/2021" },
		{ name: "Medicina 3", 	imageUrl: yogurtImg, expirationDate: "02/2021" },
		{ name: "Medicina 4", 	imageUrl: yogurtImg, expirationDate: "02/2021" },
		{ name: "Medicina 5", 	imageUrl: yogurtImg, expirationDate: "02/2021" },
		{ name: "Medicina 6", 	imageUrl: yogurtImg, expirationDate: "02/2021" },
		{ name: "Medicina 7", 	imageUrl: yogurtImg, expirationDate: "02/2021" },
		{ name: "Medicina 8", 	imageUrl: yogurtImg, expirationDate: "02/2021" },
	];
	return (
		<Grid container  justify="center" className={classes.root} spacing={2}>

			<MaterialTable
				options={{
					showTitle: false,
					paginationType: "normal",
					pageSizeOptions: [],
				}}
				actions={[
					/*{
						icon: 'add',
						label	: 'add',
						tooltip: 'Add Medicine',
						isFreeAction: true,
						onClick: (event) => alert("You want to add a new row"),
					},*/
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
					{ title: "Thumbnail", field: 'imageUrl', sorting: false, render: rowData => <img src={rowData.imageUrl} alt="" style={imgStyle}/> },
					{ title: "Name", field: "name" },
					{ title: "Expiration Date", field: "expirationDate", type: "date" },
				]}
				data={data}
				
			/>
		</Grid>
	);
};

export default Table;