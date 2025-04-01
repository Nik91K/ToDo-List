import { useState } from "react";
import { TodoType } from "../../../types/dataTypes";
import './index.css';

const MainComponent = ({ tasks, setTasks }: { tasks: TodoType[], setTasks: Function }) => {
    const [checkedTasks, setCheckboxComplete] = useState<{ [key: number]: boolean }>({});
    const checkboxComplete = (taskId: number) => {
        setCheckboxComplete((prev) => ({
            ...prev,[taskId]: !prev[taskId],
        }))
    }

    function handleDelete(taskId: number) {
        console.log('завдання Ід видалено', taskId)
        setTasks(tasks.filter((t) => t.id !== taskId))
    }
    
    return (
        <div className="task-list">
            {tasks.map((task) => (
                <div
                key={task.id}
                className={`div-task-list ${checkedTasks[task.id] ? "task-list-completed" : ""}`}
                >
                    <input 
                    type="checkbox"
                    onChange={() => checkboxComplete(task.id)}
                    checked={checkedTasks[task.id]}
                    className="checkbox-task-list"
                    />
                    <span className="task-name-text">{task.name}</span>
                    <span className="delete-task-list">
                        <button onClick={() => handleDelete(task.id)}>x</button>
                    </span>
                </div>
            ))}
        </div>
    )
}

export default MainComponent;
