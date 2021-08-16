import { configureStore, combineReducers } from "@reduxjs/toolkit";
// Add imports from reducers here
import priorityReducer from "./prioritySlice/prioritySlice";

export const store = configureStore({
    reducer: combineReducers({
        priorityList: priorityReducer
    })
});
