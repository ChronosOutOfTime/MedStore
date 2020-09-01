export const SIGN_IN = "SIGN IN";
export const SIGN_UP = "SIGN UP";

export const TOGGLE_MODALS = "USER:toggle_modals";
export const TOGGLE_LOGIN_MODALS = "USER:toggle_login_modals";
export const TOGGLE_BOTH_LOGIN_MODALS = "USER:toggle_both_modals";

export const onToggleModals = () => ({type: TOGGLE_MODALS});
export const onToggleLoginPart = (prop) => ({prop, type: TOGGLE_LOGIN_MODALS});
export const onToggleBothLoginModals = () => ({type: TOGGLE_BOTH_LOGIN_MODALS});
