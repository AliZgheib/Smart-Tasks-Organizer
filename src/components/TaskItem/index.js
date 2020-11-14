import React, { useContext, useState } from "react";
import { TasksContext } from "./../../contexts/TaskContext";

import { FiThumbsUp, FiThumbsDown, FiEdit, FiTrash2 } from "react-icons/fi";
import "./style.css";

export default function TaskItem({ listId, task }) {
  const { updateTask, deleteTask } = useContext(TasksContext);
  const [isEditing, setIsEditing] = useState(false);
  const [content, setContent] = useState(task.content);
  const [selected, setSeleceted] = useState(task.category);

  //edit functions

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleSelectChange = (e) => {
    setSeleceted(e.target.value);
  };

  const handleSubmit = () => {
    if (content.length > 0 && selected.length > 0) {
      updateTask(listId, task.taskId, content, selected, task.isComplete);
      setContent("");
      setSeleceted(0);
      setIsEditing(false);
      // setSeleceted(0);
    }
  };

  //main functions

  const handleUp = () => {
    updateTask(listId, task.taskId, content, selected, false);
  };
  const handleDown = () => {
    updateTask(listId, task.taskId, content, selected, true);
  };
  const handleEdit = () => {
    setIsEditing(true);
  };
  const handleDelete = () => {
    deleteTask(listId, task.taskId);
  };

  const renderStatus = () => {
    if (task.isComplete) {
      return <FiThumbsUp className="task-item-up" onClick={handleUp} />;
    } else {
      return <FiThumbsDown className="task-item-down" onClick={handleDown} />;
    }
  };

  if (isEditing) {
    return (
      <div className="new-list-item">
        <div className="form-group">
          <input
            className="form-control"
            value={content}
            onChange={handleContentChange}
          />
          <select value={selected} onChange={handleSelectChange}>
            <option hidden>Category</option>
            <option value="Work">Work</option>
            <option value="Family">Family</option>
            <option value="Personal">Personal</option>
            <option value="Other">Other</option>
          </select>
          <button className="add-btn" onClick={handleSubmit}>
            Update Task
          </button>
        </div>
      </div>
    );
  }
  return (
    <div className="task-item">
      <h3
        className="task-item-content"
        style={
          task.isComplete
            ? { textDecoration: "line-through" }
            : { textDecoration: "none" }
        }
      >
        {task.content}
      </h3>
      <h3
        className="task-item-category"
        style={
          task.isComplete
            ? { textDecoration: "line-through" }
            : { textDecoration: "none" }
        }
      >
        {task.category}
      </h3>
      <div className="actions">
        {renderStatus()}
        <FiEdit className="task-item-edit" onClick={handleEdit} />
        <FiTrash2 className="task-item-trash" onClick={handleDelete} />
      </div>
    </div>
  );
}
