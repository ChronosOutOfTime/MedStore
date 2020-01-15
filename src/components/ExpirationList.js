import React, { useState }  from 'react';

import { Avatar } from '@material-ui/core';
import Chip from '@material-ui/core/Chip';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import Tooltip from '@material-ui/core/Tooltip';
import { makeStyles } from '@material-ui/core/styles';
import CreateIcon from '@material-ui/icons/Create';

import { calculateExpiration } from '../utils/utils';

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1,
	},
	avatar: {
		width: 52,
	},
	list: {
		width: 250,
	},
	fullList: {
		width: 'auto',
	},
	paper: {
		alignItems: "center",
		width: 250,
	},
	toolbar: {
		display: 'block',
		alignItems: 'center',
		justifyContent: 'flex-end',
		padding: theme.spacing(0, 1),
		...theme.mixins.toolbar,
	},
	img: {
		objectFit: "contain",
		width: 100,
		height: 100,
		borderRadius: "50%",
	},
}));


export default function ExpirationList({
	medicines,
	title,
	expirationType,
	onChangeVisibilityEditPanel,
}) {
	const [spacing] = useState(2);
	const classes = useStyles();

	return (
		<Grid container  justify="center" className={classes.root} spacing={2}>
			<Grid item xs={6}>
				
				<Grid container justify="center" spacing={spacing}>
					<Grid item xs={12}>
						{title}
					</Grid>
					{medicines.map(({pictureUrl, expiresIn, name}, index) => (
						<Grid key={index} item>
							<Paper className={classes.paper} >
								<Grid key={index} item>
									<Chip
										avatar={<Avatar className={classes.avatar}>{calculateExpiration({expiresIn, expirationType})}</Avatar>}
										label={name}
										className={classes.chip}
										color="default"
									/>
									<Tooltip title="Edit" placement="top">
										<IconButton aria-label="show 4 new mails" color="inherit" onClick={() => onChangeVisibilityEditPanel(true)}>
											<CreateIcon />
										</IconButton>
									</Tooltip>
								</Grid>
								<Grid>
									<img className={classes.img} src={pictureUrl} alt="yogurt"/>
								</Grid>
								<Grid>
									<p>Expires in : {expiresIn}</p>
								</Grid>
							</Paper>
						</Grid>
					))}
				</Grid>
			</Grid>
		</Grid>
	);
}