import { useState } from "react";
import { TodoType } from "../../../types/dataTypes";
import './index.css';

const MainComponent = ({ tasks }: { tasks: TodoType[] }) => {
    const [checkedTasks, setCheckboxComplete] = useState<{ [key: number]: boolean }>({});
    const checkboxComplete = (taskId: number) => {
        setCheckboxComplete((prev) => ({
            ...prev,
            [taskId]: !prev[taskId],
        }));
    };

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
                    checked={!!checkedTasks[task.id]}
                    className="checkbox-task-list"
                    />
                    {task.name}
                </li>
            ))}
        </ul>
    );
};

export default MainComponent;
