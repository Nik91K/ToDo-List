import { useState } from 'react';
import { TodoType } from '../../types/dataTypes';
import Title from './title/index';
import MainComponent from './mainComponent/index'
import './index.css'

const ToDoList = () => {
    const [text, setText] = useState("");
    const [tasks, setTasks] = useState<TodoType[]>([])
    const handleClick = () => {
        if (text.trim() === "") return;

        const newTask: TodoType = {
            id: tasks.length + 1,
            name: text,
            isActive: true,
        };

        setTasks([...tasks, newTask]);
        setText("");
    };
    
    return (
        <div className='main-list-page'>
            <Title>
                <input 
                    className='add-task-input'
                    type="text" 
                    placeholder="Enter a new task" 
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
                <button onClick={handleClick} className='add-task-button'>
                    Add Task
                </button>
                <MainComponent tasks={tasks} setTasks={setTasks} />
            </Title>
        </div>


    );
};

export default ToDoList;