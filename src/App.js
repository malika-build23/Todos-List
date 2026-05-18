import './App.css';
import Header from "./My components/Header";
import { Todos } from './My components/Todos';
import { Footer } from './My components/Footer';
import { AddTodo } from './My components/AddTodo';
import React, { useState, useEffect } from 'react';  
import { About } from './My components/About';
import {
  Routes,
  Route
} from "react-router-dom";
function App() {

  let initTodos;

  
  if (localStorage.getItem("todos") === null || localStorage.getItem("todos") === "[object JSON]") {
    initTodos = [];

  } else {
    initTodos = JSON.parse(localStorage.getItem("todos"));
  }
  const [todos, setTodos] = useState(initTodos);

  const onDelete = (todo) => {
    console.log("I am onDelete of todo", todo);
    setTodos(todos.filter((e) => {
      return e !== todo;
    }));
    console.log("deleted", todos);
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  const addTodo = (title, desc) => {
    console.log("I am adding this todo", title, desc);
    let sno;
    if (todos.length === 0) {
      sno = 0
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }

    const myTodo = {
      sno: sno,
      title: title,
      desc: desc
    }

    setTodos([...todos, myTodo]);
    console.log(myTodo);
  }

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);


  return (
    <>
      <Header title="My Todos List" searchBar={false} />
      <Routes>
        <Route path="/" element={
          <div style={{minHeight: '90vh'}}>
            <AddTodo addTodo={addTodo} />
            <Todos todos={todos} onDelete={onDelete} />
          </div>
        } />
      
        <Route path="/about" element={
          <div style={{minHeight: '90vh'}}>
            <About />
          </div>
        } />
      </Routes>
      <Footer />
    </>
  );
}

export default App;




