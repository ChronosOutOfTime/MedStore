export const ADD_MEDICINE = "MEDICINE:add_medicine";
export const CHANGE_EXPIRATION_TYPE = "MEDICINE:change_expiration_type";
export const CHANGE_VISIBILITY_EDIT_PANEL = "MEDICINE:change_visibility_edit_panel";
export const UPDATE_EDITING = "MEDICINE:editing";

export const addMedicine = (medicine) => ({medicine, type: ADD_MEDICINE});
export const onChangeExpirationType = (expirationType) => ({expirationType, type: CHANGE_EXPIRATION_TYPE});
export const onChangeVisibilityEditPanel = (status) => ({status, type: CHANGE_VISIBILITY_EDIT_PANEL});
export const updateEditing = (editing) => ({editing, type: UPDATE_EDITING});