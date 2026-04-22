import { createSelector } from '@ngrx/store';
import { AppStateInterface } from '../types/appState.interface';
import { UsersStateInterface } from '../types/usersState.interface';

export const selectFeature = (state: AppStateInterface) => state.users;

export const selectUsers = createSelector(
  selectFeature,
  (state: UsersStateInterface) => state.data
);

export const selectIsLoading = createSelector(
  selectFeature,
  (state: UsersStateInterface) => state.isLoading
);

export const selectError = createSelector(
  selectFeature,
  (state: UsersStateInterface) => state.error
);
