import React from 'react'
import Task from './Task'


interface tasksProps {
    tasks: Array<Todos>
    onDelete: deleteTask;
    onToggle: toggleTask;
}

const Tasks: React.FC<tasksProps> = ({ tasks, onDelete, onToggle }) => {
    return (
        <>
            {tasks.map((task) => (<Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle} />))}
        </>
    )
}

export default Tasks
