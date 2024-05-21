import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import rootReducer from "./reducers";

const store = configureStore({
    reducer: rootReducer,
});

// Define the type for the store's dispatch function
export type AppDispatch = typeof store.dispatch;

// Create a custom hook for using the dispatch function with the correct type
export const useAppDispatch = (): AppDispatch => useDispatch<AppDispatch>();

export default store;
