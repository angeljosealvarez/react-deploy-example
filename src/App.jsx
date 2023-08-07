import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";

const App = () => {
  const [taskName, setTaskName] = useState("");
  const [taskDesc, setDescName] = useState("");
  const [tasks, setTasks] = useState([]);

  const setHandleName = (event) => {
    setTaskName(event.target.value);
  };

  const handleDeleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  const setHandleDesc = (event) => {
    setDescName(event.target.value);
  };

  const submitInfo = () => {
    console.log("Nombre: ", taskName);
    console.log("Descripción: ", taskDesc);

    setTasks([...tasks, { Name: taskName, Desc: taskDesc }]);
    console.log("Tareas", tasks);

    // Limpiar los campos después de agregar la tarea
    setTaskName("");
    setDescName("");
  };

  return (
    <div>
      <div className="center-elements">
        <h1>Nombre de la tarea</h1>
        <input value={taskName} onChange={setHandleName}></input>
        <br />
        <hr className="horizontal-line" />
        <h3>Descripción de la tarea</h3>
        <textarea
          value={taskDesc}
          onChange={setHandleDesc}
          rows="4"
          cols="50"
        ></textarea>
        <br />
        <hr className="horizontal-line" />
        <button onClick={submitInfo}>Crear tarea</button>
      </div>
      {/* Mostar tareas */}

      <div className="task-grid">
        {tasks.map((task, index) => (
          <div key={index} className="task-card">
            <strong>Nombre:</strong> {task.Name} <br />
            <strong>Descripción:</strong> {task.Desc}
            <button onClick={() => handleDeleteTask(index)}>Eliminar</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App