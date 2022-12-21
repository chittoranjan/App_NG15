import {createFeatureSelector, createSelector} from "@ngrx/store";
import {AuthState} from "./state";

export const authState = createFeatureSelector<AuthState>('auth');
export const selectIsLoggedIn=createSelector(
  authState,
  (state)=> state.loggedIn
)

export const selectCurrentUser=createSelector(
  authState,
  (state)=> state.currentUser
)

