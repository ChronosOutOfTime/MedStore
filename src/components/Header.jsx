import React, {useState} from 'react';
import { connect } from 'react-redux';

import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import AccountCircle from '@material-ui/icons/AccountCircle';

import {
	SIGN_IN,
	SIGN_UP,
	onToggleLoginPart,
	onToggleModals,
} from '../actions/user';
import { DRAWER_WIDTH } from '../utils/utils';

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


function Header({
	onToggle = () => {},
	onToggleModals = () => {},
}) {
	const classes = useStyles();
	const menuId = 'primary-search-account-menu';
	const [setAnchorEl] = useState(null);

	function handleProfileMenuOpen(event) {
		setAnchorEl(event.currentTarget);
	}
	return <AppBar position="static" className={classes.appBar}>
		<Toolbar>
			<Typography variant="h6" noWrap>
				Your medicines
			</Typography>
			<div className={classes.grow} />
			<Typography variant="h6" noWrap>
				<Button onClick={() => {
					onToggle(SIGN_IN);
					onToggleModals();
				}}>{SIGN_IN}</Button>
			</Typography>
			<Typography variant="h6" noWrap>
				<Button onClick={() => {
					onToggle(SIGN_UP);
					onToggleModals();
				}}>{SIGN_UP}</Button>
			</Typography>
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
	</AppBar>;
}

const mapStateToProps = () => ({});

  
const mapDispatchToProps = {
	onToggle: onToggleLoginPart,
	onToggleModals,
};


const HeaderConnected = connect(
	mapStateToProps,
	mapDispatchToProps,
)(Header);
  
export default HeaderConnected;
