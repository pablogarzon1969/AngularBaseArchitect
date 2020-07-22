import { createReducer, on } from '@ngrx/store';
import { loggedUser, loggedIn, logingUserError, logoutAuth } from '../actions/auth.actions';

export interface State {
  isLoading: boolean;
  error: string;
}

export const initialState: State = {
  isLoading: false,
  error: ''
}

const authInitialReducer = createReducer(initialState,
  on(loggedUser, state => ({ ...state, isLoading: false })),
  on(logingUserError, (state, { error }) => ({ ...state, error })),
  on(loggedIn, (state, { isLogin }) => ({ ...state, isLoading: isLogin })),
  on(logoutAuth, (state, { isLogin }) => ({ ...state, isLoading: isLogin }))
);

export function authReducer(state, action) {
  return authInitialReducer(state, action);
}
