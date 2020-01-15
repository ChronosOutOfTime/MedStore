import React from "react";
import MaterialTable from "material-table";
import yogurtImg from "../assets/yogurt.jpg";

const imgStyle = {width: 40, height: 40, borderRadius: '50%'};

const Table = () => {
	return (
		<div style={{ maxWidth: "100%" }}>
			<MaterialTable
				columns={[
					{ title: "Thumbnail", field: 'imageUrl', render: rowData => <img src={rowData.imageUrl} alt="" style={imgStyle}/> },
					{ title: "Name", field: "name" },
					{ title: "Expiration Date", field: "expirationDate", type: "date" },
				]}
				data={[
					{ name: "TachiFlu", 	imageUrl: yogurtImg, expirationDate: "02/2021" },
					{ name: "Tachipirina", 	imageUrl: yogurtImg, expirationDate: "02/2021" },
					{ name: "Vivin C", 	imageUrl: yogurtImg, expirationDate: "02/2021" },
				]}
				title="Demo Title"
			/>
		</div>
	);
};

export default Table;