import React, { useContext, useState, useRef } from "react";

import { TasksContext } from "./../../contexts/TaskContext";
import TaskItem from "./../TaskItem";
import { AiOutlineClose } from "react-icons/ai";

import "./style.css";

export default function TaskList({ listName, listId, data }) {
  const [content, setContent] = useState("");
  const [selected, setSeleceted] = useState(0);
  const listRef = useRef();
  const { createTask, deleteList } = useContext(TasksContext);

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleSelectChange = (e) => {
    setSeleceted(e.target.value);
  };

  const handleSubmit = () => {
    if (content.length > 0 && selected.length > 0) {
      createTask(listId, content, selected);
      setContent("");
      setSeleceted(0);
    }
  };
  const handleDelete = () => {
    listRef.current.className += "home animate__animated animate__backOutLeft";

    setTimeout(() => {
      deleteList(listId);
    }, 2000);
  };
  return (
    <div className="task-list" ref={listRef}>
      <h3>{listName}</h3>
      <div className="task-list-items">
        {data.map((task) => {
          return <TaskItem key={task.taskId} listId={listId} task={task} />;
        })}
      </div>
      <div className="new-list-item">
        <div className="form-group ">
          <input
            className="form-control"
            value={content}
            onChange={handleContentChange}
          />
          <select value={selected} onChange={handleSelectChange}>
            <option hidden value={0}>
              Category
            </option>
            <option value="Work">Work</option>
            <option value="Family">Family</option>
            <option value="Personal">Personal</option>
            <option value="Other">Other</option>
          </select>
          <button className="add-btn" onClick={handleSubmit}>
            Add Task
          </button>
        </div>
      </div>
      <AiOutlineClose
        size={25}
        className="close-task-list"
        onClick={handleDelete}
      />
    </div>
  );
}
