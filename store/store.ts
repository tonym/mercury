import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { Env } from '../constants';
import { createWrapper } from 'next-redux-wrapper';

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore['getState']>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>;

const makeStore = () =>
  configureStore({
    reducer: {},
    devTools: Env.NODE_ENV === 'development'
  });

export const wrapper = createWrapper<AppStore>(makeStore);
