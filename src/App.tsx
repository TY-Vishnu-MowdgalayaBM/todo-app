import React, { useState } from 'react';
import './App.css';
import AddTask from './components/AddTask';
import Header from './components/Header';
import Tasks from './components/Tasks';

function App() {

  const [showAddTask, setShowAddTask] = useState(false)

  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctors Appointment",
      day: "5th Feb at 2:30pm",
      reminder: true
    },
    {
      id: 2,
      text: "Dinner Date",
      day: "14th Feb at 8:30pm",
      reminder: false
    },
    {
      id: 3,
      text: "Assignment Submission",
      day: "15th may at 9:30pm",
      reminder: false
    },
    {
      id: 4,
      text: "Workout",
      day: "4th Dec at 5:30am",
      reminder: true
    }
  ])



  const deleteTask: deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const toggleTask: toggleTask = (id) => {
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task))
    console.log(id);
  }

  const addTask: addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    console.log(id);
    const newTask = { id, ...task }
    setTasks([...tasks, newTask])

  }

  return (
    <div className="container">
      <Header title="Todo List" onAdd={() => setShowAddTask(!showAddTask)} showTask={showAddTask} />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length === 0 ? 'no tasks to show' : <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleTask} />}
    </div>
  );
}

export default App;
