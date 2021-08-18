import reducer, {addTask, removeTask, toggleTask} from "./prioritySlice";

describe("prioritySlice", () => {
    
    const initialState = {
        tasks: [
            {id: 0, task: "New Task", completed: false},
            {id: 1, task: "Next Task", completed: false},
            {id: 2, task: "Last Task", completed: false}
        ]
    };
    
    it("should return an initial state of blank tasks and loading / error as false", () => {
        expect(reducer(initialState, {})).toEqual({
            tasks: [
                {id: 0, task: "New Task", completed: false},
                {id: 1, task: "Next Task", completed: false},
                {id: 2, task: "Last Task", completed: false}
            ]
        });
    });

    it("should handle a task being added to the empty list", () => {
        const previousState = {
            tasks: []
        };
        expect(reducer(previousState, addTask())).toEqual({
            tasks: [
                {
                    id: 0,
                    task: 'New task',
                    completed: false
                }
            ]
        });
    });

    it("should handle a task toggling as completed", () => {
        const previousState = {
            tasks: [
                {
                    id: 0,
                    task: 'New Task',
                    completed: false
                }
            ]
        };
        expect(reducer(previousState, toggleTask(0))).toEqual({
            tasks: [
                {
                id: 0,
                task: 'New Task',
                completed: true
                }
            ]
        });
    });


    it("should handle a task being removed from the list", () => {
        const previousState = {
            tasks: [
                {
                    id: 0,
                    task: 'New Task',
                    completed: false
                },
                {
                    id: 1,
                    task: 'Last Task',
                    completed: false
                }
            ]
        };
        expect(reducer(previousState, removeTask(0))).toEqual({
            tasks: [
                {
                    id: 1,
                    task: 'Last Task',
                    completed: false
                }
            ]
        });
    });
});