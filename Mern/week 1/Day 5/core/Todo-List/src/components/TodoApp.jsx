import React, { useState } from 'react';

const TodoApp = () => {
    // State for storing tasks
    const [tasks, setTasks] = useState([
        { id: 1, text: 'Task 1', completed: false },
    ]);


    const [newTask, setNewTask] = useState('');


    const handleInputChange = (event) => {
        setNewTask(event.target.value);
    };


    const handleAddTask = (event) => {
        event.preventDefault();

        if (newTask.trim() === '') {
            return;
        }

        const newTaskObject = {
            id: tasks.length + 1,
            text: newTask,
            completed: false,
        };

        setTasks([...tasks, newTaskObject]);
        setNewTask(''); // Clear the input field
    };

    const handleToggleComplete = (taskId) => {
        setTasks((prevTasks) =>
            prevTasks.map((task) =>
                task.id === taskId ? { ...task, completed: !task.completed } : task
            )
        );
    };

    const handleRemoveTask = (taskId) => {
        setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
    };

    return (
        <div>
            <h1>Todo List</h1>
            <form onSubmit={handleAddTask}>
                <input
                    type="text"
                    placeholder="New task"
                    value={newTask}
                    onChange={handleInputChange}
                /> <br />
                <button type="submit">Add Task</button>
            </form>
            <tbody>
            <tr>
                {tasks.map((task) => (
                    <td key={task.id}>
                        <input
                            type="checkbox"
                            checked={task.completed}
                            onChange={() => handleToggleComplete(task.id)}
                            
                        />
                        <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                            {task.text}
                        </span>
                        <button onClick={() => handleRemoveTask(task.id)}>Delete</button>
                    </td>
                ))}
            </tr>
            </tbody>
        </div>
    );
};

export default TodoApp;
