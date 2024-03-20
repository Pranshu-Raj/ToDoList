import { useState } from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([
    "Eat dinner",
    "Call the CEO",
    "Take Shower",
  ]);
  const [newTask, setNewTask] = useState("");
  const [editIndex, setEditIndex] = useState(-1);
  const [editValue, setEditValue] = useState("");

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function addTask() {
    if (newTask.trim() !== "") {
      setTasks((t) => [...t, newTask]);
      setNewTask("");
    }
  }
  function deleteTask(index) {
    const updateTasks = tasks.filter((_, i) => i !== index);
    setTasks(updateTasks);
  }
  function moveTaskUp(index) {
    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] = [
        updatedTasks[index - 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  }
  function moveTaskDown(index) {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = [
        updatedTasks[index + 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  }

  // function handleEdit(index, value) {
  //   setEditIndex(index);
  //   setEditValue(value);
  // }

  // function handleEditChange(event) {
  //   setEditValue(event.target.value);
  // }

  // function handleUpdate(index) {
  //   if (editValue.trim() !== "") {
  //     const updatedTasks = [...tasks];
  //     updatedTasks[index] = editValue;
  //     setTasks(updatedTasks);
  //     setEditIndex(-1);
  //     setEditValue("");
  //   }
  // }

  // function cancelEdit() {
  //   setEditIndex(-1);
  //   setEditValue("");
  // }
  return (
    <div className="to-do-list">
      <h1>To-Do-List</h1>
      <div>
        <input
          type="text"
          value={newTask}
          onChange={handleInputChange}
          placeholder="Enter a Task...."
        />
        <button className="add-button" onClick={addTask}>
          Add
        </button>
      </div>
      <ol>
        {tasks.map((task, index) => (
          <li key={index}>
            <span className="text">{task}</span>
            <button
              className="edit-button"
              onClick={() => handleEdit(index, task)}
            >
              Edit
            </button>
            <button className="delete-button" onClick={() => deleteTask(index)}>
              Delete
            </button>
            <button className="move-button" onClick={() => moveTaskUp(index)}>
              MoveUP
            </button>
            <button className="move-button" onClick={() => moveTaskDown(index)}>
              MoveDown
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default App;
