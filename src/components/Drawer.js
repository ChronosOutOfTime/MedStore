import React, { useState }  from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import AccountCircle from '@material-ui/icons/AccountCircle';

import {
	onChangeExpirationType,
	onChangeVisibilityEditPanel,
} from '../actions/medicines';
import DashboardContainer from '../containers/DashboardContainer';
import { editPanelVisibilitySelector, editingSelector, expirationTypeSelector } from '../selectors/medicines';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
	grow: {
		flexGrow: 1,
	},
	root: {
		display: 'flex',
	},
	appBar: {
		width: `calc(100% - ${drawerWidth}px)`,
		marginLeft: drawerWidth,
	},
	appBarShift: { 
		marginLeft: drawerWidth,
		width: `calc(100% - ${drawerWidth}px)`,
		transition: theme.transitions.create(['width', 'margin'], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
	},
	menuButton: {
		marginRight: 36,
	},
	hide: {
		display: 'none',
	},
	drawer: {
		width: drawerWidth,
		flexShrink: 0,
	},
	drawerOpen: {
		width: drawerWidth,
		transition: theme.transitions.create('width', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
	},
	drawerClose: {
		transition: theme.transitions.create('width', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
		overflowX: 'hidden',
		width: theme.spacing(8) + 40,
		[theme.breakpoints.up('sm')]: {
			width: theme.spacing(9) + 20,
		},
	},
	chevronEdit: {
		right: 0,
		position: "absolute",
	},
	toolbar: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		padding: theme.spacing(0, 1),
		...theme.mixins.toolbar,
	},
	sectionDesktop: {
		display: 'none',
		[theme.breakpoints.up('md')]: {
			display: 'flex',
		},
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing(3),
	},
}));

const MiniDrawer = ({
	expirationType,
	onChangeExpirationType,
	onChangeVisibilityEditPanel,
}) => {
	const classes = useStyles();
	const [setAnchorEl] = useState(null);
	const menuId = 'primary-search-account-menu';

	function handleProfileMenuOpen(event) {
		setAnchorEl(event.currentTarget);
	}
	return (
		<div className={classes.root}>
			<CssBaseline />
			<AppBar
				position="fixed"
				className={classes.appBar}
			>
				<Toolbar>
					
					<Typography variant="h6" noWrap>
						Dashboard
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
				
				<Divider />
				<List>
					{[
						{
							text: 'Days',
							type: "days",
						}, {
							text: 'Months',
							type: "months",
						},
					].map(({text, type}) => (
						<ListItem button key={text} selected={type === expirationType}>
							<ListItemText primary={text} onClick={() => onChangeExpirationType(type)}/>
						</ListItem>
					))}
				</List>
			</Drawer>
			<main className={classes.content}>
				<div className={classes.toolbar} />
				<DashboardContainer/>
			</main>

		</div>
	);
};

export const medicinesSelectors = createSelector(
	[expirationTypeSelector, editingSelector, editPanelVisibilitySelector],
	(
		expirationType,
		editing,
		isEditing,
	) => ({
		expirationType,
		editing,
		isEditing,
	}),
);

const mapStateToProps = (state) => medicinesSelectors(state);
  
const mapDispatchToProps = {
	onChangeExpirationType,
	onChangeVisibilityEditPanel,
};

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(MiniDrawer);