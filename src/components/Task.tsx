import React from 'react'

interface taskProps {
    task: Todos;
    onDelete: deleteTask;
    onToggle: toggleTask;
}

const Task: React.FC<taskProps> = ({ task, onDelete, onToggle }) => {
    return (
        <div className={`task ${task.reminder ? 'complete' : ''}`} onDoubleClick={() => onToggle(task.id)}>
            <h3>{task.text} <button style={{ color: 'red' }} onClick={() => onDelete(task.id)} >x</button> </h3>
            <p>{task.day}</p>
        </div>
    )
}

export default Task
