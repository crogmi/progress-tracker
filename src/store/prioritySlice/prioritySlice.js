import { createSlice, createSelector } from "@reduxjs/toolkit";

export const prioritySlice = createSlice({
    name: "priorityList",
    initialState: {
        tasks: [],
        isLoading: false,
        error: false
    },
    reducers: {
        addTask(state, action) {
            const {id, task} = action.payload;
            state.push({id, task, completed: false});
        },
        toggleTask(state, action) {
            const task = state.find(task => task.id === action.payload);
            if (task) {
                task.completed = !task.completed
            }
        },
        removeTask(state, action) {
            const {id} = action.payload;
            return state.filter(task => task.id !== id);
        }
    }
});

export const {
    addTask,
    toggleTask,
    removeTask
} = prioritySlice.actions;

export default prioritySlice.reducer;

// Add any thunks

