import React, { useState } from "react";

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleAddTask = () => {
    if (input.trim()) {
      setTasks([...tasks, input.trim()]);
      setInput("");
    }
  };

  const handleRemoveTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleAddTask();
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-cyan-700 to-blue-200">
      <h1 className="text-5xl font-extrabold text-white mb-8 shadow-md">
        Todo List
      </h1>
      <div className="bg-gradient-to-r from-gray-300 to-gray-700 rounded-lg shadow-lg p-6 w-96 transform transition-transform hover:scale-105">
        <input
          className="border border-gray-300 rounded-md p-2 w-full mb-4 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
          type="text"
          value={input}
          placeholder="Enter Task"
          onChange={handleInputChange}
          onKeyDown={handleKeyPress}
        />
        <button
          className="bg-indigo-600 text-white rounded-md py-2 w-[100px] hover:bg-indigo-700 transition duration-300 "
          onClick={handleAddTask}
        >
          Add Task
        </button>
        <ul className="mt-4 space-y-2">
          {tasks.map((task, index) => (
            <li
              key={index}
              className="flex justify-between items-center p-4 border border-gray-300 rounded-md shadow-md transition-transform transform hover:scale-105 bg-gray-50"
            >
              <span className="text-gray-800 font-semibold">{task}</span>
              <button
                className="border-2 border-red-500 text-red-500 rounded-md px-3 py-1 hover:bg-red-500 hover:text-white transition duration-300"
                onClick={() => handleRemoveTask(index)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
