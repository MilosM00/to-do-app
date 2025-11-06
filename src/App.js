import { useState, useEffect } from 'react';
import Header from './components/Header';
import AddTask from './components/AddTask';
import ShowTask from './components/ShowTask';
import './App.css';

function App() {
  const [toDoList, setToDoList] = useState(JSON.parse(localStorage.getItem("todo")) || []);
  const [task, setTask] = useState({});

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(toDoList));
  }, [toDoList]);

  return (
    <div className="App">
      <Header />

      <AddTask 
        toDoList={toDoList}
        setToDoList={setToDoList}
        task={task}
        setTask={setTask}
      />

      <ShowTask
        toDoList={toDoList}
        setToDoList={setToDoList}
        task={task}
        setTask={setTask}
      />
    </div>
  );
}

export default App;
