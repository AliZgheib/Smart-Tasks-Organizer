import React, { createContext, useState, useEffect } from "react";

export const TasksContext = createContext();

export default function TaskContextProvider({ children }) {
  const [lists, setLists] = useState([]);

  useEffect(() => {
    const main = window.localStorage.getItem("main");

    if (main) {
      setLists(JSON.parse(main));
    } else {
      window.localStorage.setItem("main", JSON.stringify([]));
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem("main", JSON.stringify(lists));
  }, [lists]);

  const getLists = () => {
    return lists;
  };
  const createList = (listName) => {
    const listId = new Date().getTime();

    const list = { listId, listName, data: [] };

    setLists([...lists, list]);
  };

  const getList = (listId) => {
    lists.forEach((list) => {
      if (list.listId === listId) return list;
    });
  };

  const deleteList = (listId) => {
    const newLists = lists.filter((list) => list.listId !== listId);

    setLists(newLists);
  };

  const createTask = (listId, content, category, isComplete = false) => {
    const taskId = new Date().getTime();
    const newTask = { taskId, content, category, isComplete };

    const listsCopy = [...lists];
    console.log(listsCopy);
    listsCopy.forEach((list) => {
      if (list.listId === listId) {
        list.data.push(newTask);
      }
    });
    setLists(listsCopy);
  };

  const updateTask = (listId, taskId, content, category, isComplete) => {
    const updatedTask = { taskId, content, category, isComplete };

    const listsCopy = [...lists];

    listsCopy.forEach((list, listIndex) => {
      if (list.listId === listId) {
        list.data.forEach((task, taskIndex) => {
          if (taskId === task.taskId) {
            list.data[taskIndex] = updatedTask;
          }
        });
      }
    });

    setLists(listsCopy);
  };

  const deleteTask = (listId, taskId) => {
    const listsCopy = [...lists];

    listsCopy.forEach((list, listIndex) => {
      if (list.listId === listId) {
        list.data.forEach((task, taskIndex) => {
          if (taskId === task.taskId) {
            list.data.splice(taskIndex, 1);
          }
        });
      }
    });

    setLists(listsCopy);
  };

  return (
    <TasksContext.Provider
      value={{
        getLists,
        createList,
        getList,
        deleteList,
        createTask,
        updateTask,
        deleteTask,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
}
