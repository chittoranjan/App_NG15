import {createAction, props} from "@ngrx/store";

export const loggedInLoading = createAction('[AUTH] Is Logged In Loading');
export const loggedInSuccess = createAction('[AUTH] Is Logged In Success');
export const loggedInFailure = createAction('[AUTH] Is Logged In Failure', props<{ error: string }>());

export const currentUserLoading = createAction('[AUTH] Current User Loading');
export const currentUserSuccess = createAction('[AUTH] Current User Loading', props<{ currentUser: any }>());
export const currentUserFailure = createAction('[AUTH] Current User Failure', props<{ error: string }>());
