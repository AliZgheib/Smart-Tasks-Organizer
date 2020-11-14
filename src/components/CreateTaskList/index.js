import React, { useContext, useState } from "react";
import { TasksContext } from "./../../contexts/TaskContext";

import { BsPlusCircleFill } from "react-icons/bs";
import "./style.css";

export default function CreateTaskList() {
  const [name, setName] = useState("");

  const { createList } = useContext(TasksContext);

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = () => {
    if (name.length > 0) {
      createList(name);
      setName("");
    } else {
      alert("Name cant be empty");
    }
  };
  return (
    <div className="create-task">
      <div className="form-group">
        <input className="form-control" value={name} onChange={handleChange} />
      </div>
      <BsPlusCircleFill
        size={35}
        color="#fb5e58"
        className="create-btn"
        onClick={handleSubmit}
      />
    </div>
  );
}
