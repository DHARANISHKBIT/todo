import React, { useState } from 'react';

const TodoList = () => {
  const [tasks, setTasks] = useState(["Eat Breakfast", "Fake a shower", "Walk the dog"]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function addTask() {
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask.trim()]);
      setNewTask("");
    }
  }

  function deleteTask(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  }

  return (
    <div className='to-do-list'>
      <h1>To-Do List</h1>
      <div>
        <input type="text" placeholder='Enter task ...' value={newTask} onChange={handleInputChange} />
        <button className='add-button' onClick={addTask}>
          Add
        </button>
      </div>
      <ol>
        {tasks.map((task, index) => (
          <li key={index}>
            <span className='text'>{task}</span>
            <button className="delete-button" onClick={() => deleteTask(index)}>Delete</button>
            {/* <button className="move-button" onClick={() => moveTaskUp(index)}>UP</button>
            <button className="move-button" onClick={() =>moveTaskDown(index)}>Down</button> */}
          </li>
        ))}
      </ol>
    </div>
  );
}

export default TodoList;
