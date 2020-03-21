const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const User = require('../models/user');
const jwt = require('jsonwebtoken');

const { catch500Error, authFailed } = require('../utils/authUtils');


module.exports = {
	user_sigunp: (req, res, next) => {
		User
			.find({email: req.body.email})
			.exec()
			.then(users => {
				if (users.length >= 1) {
					return res.status(409).json({message: "mail exists"});
				}
				bcrypt.hash(req.body.password, 10, (error, hash) => {
					if (error) {
						return res.status(500).json({error});
					}
					const user = {
						_id: new mongoose.Types.ObjectId(),
						name: req.body.name,
						surname: req.body.surname,
						avatarPicture: req.body.avatarPicture,
						email: req.body.email,
						password: hash,
					};
					const dbHandler = new User(user);
					dbHandler
						.save()
						.then(result => {
							console.log("result", result);
							res.status(201).json({
								message: "user Created",
							});
						})
						.catch((e) => catch500Error(res, e));
				});
			})
			.catch((e) => catch500Error(res, e));
	},
	user_login: (req, res, next) => {
		User
			.find({email: req.body.email})
			.exec()
			.then(users => {
				if (users.length < 1) {
					return authFailed(res);
				}
				const user = users[0];
				bcrypt.compare(req.body.password, user.password, (error, result) => {
					if (result) {
						const token = jwt.sign({
							email: user.email,
							userId: user._id,
						}, 
						process.env.JWT_KEY,
						{
							expiresIn: "1h",
						});
						return res.status(200).json({token, message: "Auth Successful"});
					}
					// if error or other error
					return authFailed(res);
				});
			})
			.catch((e) => catch500Error(res, e));
	},
	user_deleteById: (req, res, next) => {
		const userId = req.params.userId;
		User
			.remove({
				_id: userId,
			})
			.exec()
			.then((result) => {
				console.log(result);
				res.status(200).json({
					message: "user deleted",
					request: {
						type: "POST",
						description: "create a new User",
						url: `http://localhost:3000/users/`,
						data: {
							name: {type: String, required: true},
							surname: {type: String, required: true},
							password: {type: String, required: true},
							email: {type: String, required: true},
							avatarPicture: {type: String},
						},
					},
				});
			})
			.catch((e) => catch500Error(res, e));
	},
};
