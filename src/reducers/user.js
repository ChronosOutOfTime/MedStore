import {
	SIGN_IN,
	SIGN_UP,
	TOGGLE_BOTH_LOGIN_MODALS,
	TOGGLE_LOGIN_MODALS,
	TOGGLE_MODALS,
} from '../actions/user';

const initialState = {
	user: null,
};

const login = (state = initialState, action) => {
	switch (action.type) {
	case TOGGLE_LOGIN_MODALS: {
		return {
			...state,
			[action.prop]: !state[action.prop],
			[action.prop === SIGN_IN ? SIGN_UP : SIGN_IN]: false,
		};
	}
	case TOGGLE_MODALS: {
		return {
			...state,
			showModals: !state.showModals,
		};
	}
	case TOGGLE_BOTH_LOGIN_MODALS: {
		return {
			...state,
			[SIGN_IN]: !state[SIGN_IN],
			[SIGN_UP]: !state[SIGN_UP],
		};
	}
	default:
		return state;
	}
};

export default login;