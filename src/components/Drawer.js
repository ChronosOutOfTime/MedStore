import clsx from 'clsx';
import React, { useState }  from 'react';
import { connect } from 'react-redux'
import { createSelector } from 'reselect'

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
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AccountCircle from '@material-ui/icons/AccountCircle';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import MenuIcon from '@material-ui/icons/Menu';

import {
	onChangeExpirationType,
	onChangeVisibilityEditPanel,
} from '../actions/medicines';
import DashboardContainer from '../containers/DashboardContainer';
import EditPanelContainer from '../containers/EditPanelContainer';
import { editPanelVisibilitySelector, editingSelector, expirationTypeSelector } from '../selectors/medicines';

const drawerWidth = 590;

const useStyles = makeStyles(theme => ({
	grow: {
		flexGrow: 1,
	},
	root: {
		display: 'flex',
	},
	appBar: {
		zIndex: theme.zIndex.drawer + 1,
		transition: theme.transitions.create(['width', 'margin'], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
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
		whiteSpace: 'nowrap',
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
	editing = null,
	isEditing,
	onChangeExpirationType,
	onChangeVisibilityEditPanel,
}) => {
	const classes = useStyles();
	const theme = useTheme();
	const [open, setOpen] = useState(false);
	const [setAnchorEl] = useState(null);
	const menuId = 'primary-search-account-menu';
	function handleDrawerOpen() {
		setOpen(true);
	}

	function handleDrawerClose() {
		setOpen(false);
	}

	function handleProfileMenuOpen(event) {
		setAnchorEl(event.currentTarget);
	}
	return (
		<div className={classes.root}>
			<CssBaseline />
			<AppBar
				position="fixed"
				className={clsx(classes.appBar, {
					[classes.appBarShift]: open,
				})}
			>
				<Toolbar>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						onClick={handleDrawerOpen}
						edge="start"
						className={clsx(classes.menuButton, {
							[classes.hide]: open,
						})}
					>
						<MenuIcon />
					</IconButton>
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
				variant="permanent"
				className={clsx(classes.drawer, {
					[classes.drawerOpen]: open,
					[classes.drawerClose]: !open,
				})}
				classes={{
					paper: clsx({
						[classes.drawerOpen]: open,
						[classes.drawerClose]: !open,
					}),
				}}
				open={open}
			>
				<div className={classes.toolbar}>
					Sort By
					<IconButton className={classes.chevronEdit} onClick={handleDrawerClose}>
						{theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
					</IconButton>
				</div>
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
			<Drawer
				variant="temporary"
				className={clsx(classes.drawer, {
					[classes.drawerOpen]: isEditing,
					[classes.drawerClose]: !isEditing,
				})}
				anchor="right"
				classes={{
					paper: clsx({
						[classes.drawerOpen]: isEditing,
						[classes.drawerClose]: !isEditing,
					}),
				}}
				open={isEditing}
			>
				<div className={classes.toolbar}>
					Edit
					<IconButton className={classes.chevronEdit} onClick={() => onChangeVisibilityEditPanel(false)}>
						{theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
					</IconButton>
				</div>
				<Divider />
				<EditPanelContainer/>
			</Drawer>
		</div>
	);
}

export const medicinesSelectors = createSelector(
	[expirationTypeSelector, editingSelector, editPanelVisibilitySelector],
	(
		expirationType,
		editing,
		isEditing
	) => ({
		expirationType,
		editing,
		isEditing,
	})
);

const mapStateToProps = (state) => medicinesSelectors(state);
  
const mapDispatchToProps = {
	onChangeExpirationType,
	onChangeVisibilityEditPanel,
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(MiniDrawer);