import reducer, {addTask, removeTask, toggleTask} from "./prioritySlice";

describe("prioritySlice", () => {
    it("should return an initial state of blank tasks and loading / error as false", () => {
        expect(reducer(undefined, {})).toEqual({
            tasks: [],
            isLoading: false,
            error: false
        });
    });

    it("should handle a task being added to the empty list", () => {
        const previousState = [];
        expect(reducer(previousState, addTask({id: 0, task: 'New Task'}))).toEqual([
            {
                id: 0,
                task: 'New Task',
                completed: false
            }
        ]);
    });

    it("should handle a task toggling as completed", () => {
        const previousState = [
            {
                id: 0,
                task: 'New Task',
                completed: false
            }
        ];
        expect(reducer(previousState, toggleTask(0))).toEqual([
            {
                id: 0,
                task: 'New Task',
                completed: true
            }
        ]);
    });


    it("should handle a task being removed from the list", () => {
        const previousState = [
            {
                id: 0,
                task: 'New Task',
                completed: false
            }
        ];
        expect(reducer(previousState, removeTask({id: 0}))).toEqual([]);
    });
});