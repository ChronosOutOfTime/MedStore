import {
	ADD_MEDICINE,
	CHANGE_EXPIRATION_TYPE,
	CHANGE_VISIBILITY_EDIT_PANEL,
} from '../actions/medicines';
import medicinesDB  from '../resources/medicines';

const initialState = {
	medicines: medicinesDB,
	expirationType: "days",
};

const medicines = (state = initialState, action) => {
	switch (action.type) {
	case CHANGE_EXPIRATION_TYPE: {
		return {
			...state,
			expirationType: action.expirationType,
		};
	}
	case CHANGE_VISIBILITY_EDIT_PANEL: {
		return {
			...state,
			editing: {
				...state.editing,
				open: action.status,
			},
		};
	}
	case ADD_MEDICINE:
	default:
		return state
	}
}
export default medicines;