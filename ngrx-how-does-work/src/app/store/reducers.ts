import { UsersStateInterface } from '../types/usersState.interface';
import * as UsersActions from './actions';
import { createReducer, on } from '@ngrx/store';

export const initialState: UsersStateInterface = {
  isLoading: false,
  data: [],
  error: null,
};

export const reducers = createReducer(
  initialState,
  on(UsersActions.getUsers, (state) => ({
    ...state,
    isLoading: true,
    error: null,
  })),
  on(UsersActions.getUsersSuccess, (state, action) => ({
    ...state,
    isLoading: false,
    data: action.users,
  })),
  on(UsersActions.getUsersFailure, (state, action) => ({
    ...state,
    isLoading: false,
    error: action.error,
  })),
)
