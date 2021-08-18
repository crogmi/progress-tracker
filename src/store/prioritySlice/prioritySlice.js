import { createSlice, createSelector } from "@reduxjs/toolkit";

export const prioritySlice = createSlice({
    name: "priorityList",
    initialState: {
        tasks: [
            {id: 0, task: "New Task", completed: false},
            {id: 1, task: "Next Task", completed: false},
            {id: 2, task: "Last Task", completed: false}
        ]
    },
    reducers: {
        addTask(state, action) {
            const id = state.tasks.length;
            state.tasks.push({id: id, task: "New task", completed: false});
        },
        toggleTask(state, action) {
            const task = state.tasks.find(task => task.id === action.payload);
            if (task) {
                task.completed = !task.completed
            }
        },
        // Currently returning the tasks array, but need to return the state object - need to investigate
        removeTask(state, action) {
            const id = action.payload;
            state.tasks = state.tasks.filter(task => task.id !== id);
        }
    }
});

export const {
    addTask,
    toggleTask,
    removeTask
} = prioritySlice.actions;

export default prioritySlice.reducer;

export const selectTasks = (state) => state.priorityList.tasks;

// Add any thunks

