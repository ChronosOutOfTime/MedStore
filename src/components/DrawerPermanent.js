import React, { useState }  from 'react';

import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import AccountCircle from '@material-ui/icons/AccountCircle';
import AddIcon from '@material-ui/icons/Add';

import { DRAWER_WIDTH } from '../utils/utils';
import Table from './Table';

const useStyles = makeStyles(theme => ({
	root: {
		display: 'flex',
	},
	grow: {
		flexGrow: 1,
	},
	appBar: {
		zIndex: theme.zIndex.drawer + 1,
	},
	drawer: {
		width: DRAWER_WIDTH,
		flexShrink: 0,
	},
	drawerPaper: {
		width: DRAWER_WIDTH,
	},
	toolbar: theme.mixins.toolbar,
	content: {
		flexGrow: 1,
		backgroundColor: theme.palette.background.default,
		padding: theme.spacing(3),
	},
}));

export default function PermanentDrawerLeft() {
	const classes = useStyles();
	const menuId = 'primary-search-account-menu';
	const [setAnchorEl] = useState(null);

	function handleProfileMenuOpen(event) {
		setAnchorEl(event.currentTarget);
	}
	return (
		<div className={classes.root}>
			<CssBaseline />
			<AppBar position="fixed" className={classes.appBar}>
				<Toolbar>
					<Typography variant="h6" noWrap>
						Your medicines
					</Typography>
					<div className={classes.grow} />
					<div className={classes.sectionDesktop}>
						<IconButton
							edge="end"
							aria-label="account of current user"
							aria-controls={menuId}
							aria-haspopup="true"
							onClick={handleProfileMenuOpen}
							color="inherit"
						>
							<AccountCircle />
						</IconButton>
					</div>
				</Toolbar>
			</AppBar>
			<Drawer
				className={classes.drawer}
				variant="permanent"
				classes={{
					paper: classes.drawerPaper,
				}}
				anchor="left"
			>
				<div className={classes.toolbar} />
				<Divider />
				

				<List>
					{[
						{
							text: "Add Medicines",
							Icon: AddIcon,
						},
					].map(({text, Icon}) => (
						<ListItem button key={text}>
							<ListItemIcon><Icon/></ListItemIcon>
							<ListItemText primary={text} onClick={() => null}/>
						</ListItem>
					))}
				</List>

			</Drawer>
			<main className={classes.content}>
				<div className={classes.toolbar} />
				<Table/>
			</main>
		</div>
	);
}
