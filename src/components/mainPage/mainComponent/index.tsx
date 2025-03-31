import { useState } from "react";
import { TodoType } from "../../../types/dataTypes";
import './index.css';

const MainComponent = ({ tasks: deleteTask }: { tasks: TodoType[] }) => {
    const [tasks, setTasks] = useState<TodoType[]>(deleteTask)
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
        <ul className="task-list">
            {tasks.map((task) => (
                <li
                key={task.id}
                className={`li-task-list ${checkedTasks[task.id] ? "task-list-completed" : ""}`}
                >
                    <input 
                    type="checkbox"
                    onChange={() => checkboxComplete(task.id)}
                    checked={checkedTasks[task.id]}
                    className="checkbox-task-list"
                    />
                    {task.name}
                    <span className="delete-task-list">
                        <button onClick={() => handleDelete(task.id)}>x</button>
                    </span>
                </li>
            ))}
        </ul>
    )
}

export default MainComponent;
