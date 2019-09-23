import {get} from 'lodash';

export const editingSelector = state => get(state, "medicines.editing", {});
export const editPanelVisibilitySelector = state => get(state, "medicines.editing.open", false);
export const medicinesSelector = state => get(state, "medicines.medicines", []);
export const expirationTypeSelector = state => get(state, "medicines.expirationType", "days");
