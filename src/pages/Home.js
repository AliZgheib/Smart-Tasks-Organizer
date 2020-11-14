import React, { useContext } from "react";

import { TasksContext } from "./../contexts/TaskContext";

import Header from "../components/Header/";
import "./../App.css";

import * as Animate from "animate.css";
import TaskList from "./../components/TaskList";

export default function Home() {
  const { getLists } = useContext(TasksContext);
  const lists = getLists();
  return (
    <div className="home animate__animated animate__bounceInLeft">
      <Header />
      <div className="container">
        {lists.map((list, index) => {
          return (
            <TaskList
              key={list.listId}
              listName={list.listName}
              listId={list.listId}
              data={list.data}
            />
          );
        })}
      </div>
    </div>
  );
}
