import { connect } from 'react-redux'
import { createSelector } from 'reselect'

import {
	updateEditing,
} from '../actions/medicines';
import EditForm from '../components/EditForm';
import { editingSelector } from '../selectors/medicines';

// selectors

export const medicinesSelectors = createSelector(
	[editingSelector],
	(
		editing,
	) => ({
		editing,
	})
);

const mapStateToProps = (state) => (medicinesSelectors(state));

  
const mapDispatchToProps = {
	onUpdateEditing: updateEditing,
};


const EditPanelContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(EditForm);
  
export default EditPanelContainer;