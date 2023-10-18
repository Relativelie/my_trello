import { configureStore, combineReducers } from '@reduxjs/toolkit';

import { useDispatch } from 'react-redux';
import taskBoardReducer from './task/slice';

export const rootReducer = combineReducers({
  taskBoard: taskBoardReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export type RootState = ReturnType<(typeof store)['getState']>;
export default store;
