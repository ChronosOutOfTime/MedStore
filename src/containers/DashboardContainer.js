import { connect } from 'react-redux'
import { createSelector } from 'reselect'

import {
	addMedicine,
	onChangeVisibilityEditPanel,
} from '../actions/medicines';
import DashBoard from '../components/Dashboard';
import { expirationTypeSelector, medicinesSelector } from '../selectors/medicines';

// selectors

export const medicinesSelectors = createSelector(
	[medicinesSelector, expirationTypeSelector],
	(
		medicines,
		expirationType
	) => ({
		medicines,
		expirationType,
	})
);

const mapStateToProps = (state) => (medicinesSelectors(state));

  
const mapDispatchToProps = {
	onClick: addMedicine,
	onChangeVisibilityEditPanel,
};


const DashboardContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(DashBoard);
  
export default DashboardContainer;