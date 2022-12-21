import {AuthState} from "./state";
import {createReducer, on} from "@ngrx/store";
import {
  currentUserFailure,
  currentUserLoading,
  currentUserSuccess,
  loggedInFailure,
  loggedInLoading,
  loggedInSuccess
} from "./action";

export const initialAuthState: AuthState = {
  currentUser: null,
  loggedIn: false,
  error: null,
  loading: false
}
export const authReducer = createReducer(
  initialAuthState,

  // loggedIn
  on(loggedInLoading, (state) => ({
    ...state,
    loading: true
  })),

  on(loggedInSuccess, (state) => ({
    ...state,
    loggedIn: true
  })),

  on(loggedInFailure, (state, {error}) => ({
    ...state,
    loading: false,
    loggedIn: false,
    error: error
  })),

  // current User
  on(currentUserLoading, (state) => ({
    ...state,
    loading: true
  })),

  on(currentUserSuccess, (state, {currentUser}) => ({
    ...state,
    loading: false,
    currentUser: currentUser,
    error: null
  })),

  on(currentUserFailure, (state, {error}) => ({
    ...state,
    loading: false,
    currentUser: null,
    error: error
  })),

);
