import { createAction, props } from '@ngrx/store';


export const loggedUser = createAction( // Usuario logueado
  '[Auth] loggedUser',
  props<{ any }>());

export const loggedIn = createAction(
  '[Auth] loggedIn',
  props<{ isLogin: boolean }>()); // login exitoso

export const logingUserError = createAction('[Auth] logingUserError', // errores de login
  props<{ error: string }>());


export const logoutAuth = createAction('[Auth] logoutAuth', // usuario deslogueado
  props<{ isLogin: boolean }>());
