const jwt = require('jsonwebtoken');
const { authFailed } = require('../utils/authUtils');

module.exports = (req, res, next) => {
	try {
		const token = req.headers.authorization.split()[1]; // remove Bearer
		const decoded = jwt.verify(token, process.env.JWT_KEY);
		req.userData = decoded;

		next(); // if succeed
	} catch (error) {
		return authFailed(res);
	}
};