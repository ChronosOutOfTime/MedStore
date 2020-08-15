import {
	TOGGLE_LOGIN_MODALS,
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
		};
	}
	default:
		return state;
	}
};

export default login;