import TodoItemsSlice from '../components/AllTodoItems/AllTodoItems.slice';
import { configureStore } from '@reduxjs/toolkit';

export const store= configureStore({reducer:TodoItemsSlice});
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>