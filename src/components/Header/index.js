import React from "react";
import { RiTodoLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import CreateTask from "./../CreateTaskList";
import "./style.css";

export default function Header() {
  return (
    <div className="navbar navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        <RiTodoLine size={30} color="#fb5e58" />
        <h1 style={{ color: "#fb5e58" }}>Smart Tasks Organize</h1>
      </Link>
      <CreateTask />
    </div>
  );
}
