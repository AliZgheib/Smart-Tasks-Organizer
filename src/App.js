import { BrowserRouter as Router, Route } from "react-router-dom";

import TasksContextProvider from "./contexts/TaskContext";

import Home from "./pages/Home";
import About from "./pages/About";
import Intro from "./pages/Intro";

import "./App.css";

function App() {
  return (
    <TasksContextProvider>
      <Router>
        <Route exact path="/" component={Intro} />
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
      </Router>
    </TasksContextProvider>
  );
}

export default App;
