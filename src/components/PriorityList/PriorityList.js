import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    addTask,
    toggleTask,
    removeTask,
    selectTasks
} from "../../store/prioritySlice/prioritySlice";
import {
    VscAdd,
    VscRemove
} from "react-icons/vsc";
import {
    RiCheckboxBlankCircleLine,
    RiCheckboxCircleFill
} from "react-icons/ri";
import "./PriorityList.css";

const PriorityList = () => {
    const dispatch = useDispatch();
    const tasks = useSelector(selectTasks);

    return(
        <div className="dashboard-component" id="priority-list">
            <h2 className="subtitle">Priority List</h2>
            <button onClick={() => dispatch(addTask())}>
                <VscAdd />
            </button>
            <ol>
                {tasks.map((task) => {
                    return (
                        <li key={task.id} >
                            {task.task}
                            {task.completed ? 
                                <RiCheckboxCircleFill onClick={() => dispatch(toggleTask(task.id))}/>
                            :
                                <RiCheckboxBlankCircleLine onClick={() => dispatch(toggleTask(task.id))}/>
                            }
                            <button>
                                <VscRemove onClick={() => dispatch(removeTask(task.id))} />
                            </button>
                        </li>
                    )
                })}
            </ol>
        </div>
    )
};

export default PriorityList;