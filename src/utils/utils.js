import moment from 'moment';

export const calculateExpiration = ({
	expiresIn,
	expirationType = "days",
} = {}) => {
	const today = moment();
	const expiration = moment(expiresIn, "YYYY-MM");
	const difference = expiration.diff(today, expirationType);
	return difference ; // TODO: manage expired medicines, maybe with an icon
}