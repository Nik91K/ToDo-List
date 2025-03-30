import { TodoType } from "../../../types/dataTypes";

const MainComponent = ({ tasks }: { tasks: TodoType[] }) => {
    return (
        <ul>
            {tasks.map((task) => (
                <li key={task.id}>{task.name}</li>
            ))}
        </ul>
    );
};

export default MainComponent;
