import {get} from 'lodash';

import { SIGN_IN, SIGN_UP } from '../actions/user';

export const showSignInDialogSelector = state => get(state, `user.${SIGN_IN}`, false);
export const showSignUpDialogSelector = state => get(state, `user.${SIGN_UP}`, false);
