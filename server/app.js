const express = require("express");
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const medicinesRoutes = require('./api/routes/medicines');
const usersRoutes = require('./api/routes/users');
mongoose.Promise = global.Promise;

mongoose.connect(
	`mongodb+srv://mv88:${process.env.MONGO_ATLAS_PWD}@cluster0-boa0d.mongodb.net/MedStore?retryWrites=true&w=majority`,
	{
		useCreateIndex: true,
		useNewUrlParser: true,
		useUnifiedTopology: true,
	}
);
			

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use((req, res, next) => {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin,X-Requested-With,Content-Type,Accept,Authorization");
	if (req.method === "OPTIONS") {
		res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
		res.status(200).json({});
	}
	next();
});


app.use("/medicines", medicinesRoutes);
app.use("/users", usersRoutes);


// every request that reach this, catch it and return error
app.use((req, res, next) => {
	const error = new Error("Not found");
	error.status = 404;
	next(error);
});

app.use((error, req, res, next) => {
	
	res.status(error.status || 500);
	res.json({
		error: {
			message: error.message || "Server Error",
		},
	});
	next(error);
});


module.exports = app;