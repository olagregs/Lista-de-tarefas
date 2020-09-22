import React, { useState } from 'react';

import './App.css';
import Form from './components/form';
import TodoList from './components/todoList';

function App() {
  const [ inputText, setInput ] = useState("");
  const [ todos, setTodos ] = useState([]);

  return (
    <div className="App">
      <header>
        <h1>Lista de Tarefas</h1>
      </header>

      <Form todos={todos} setTodos={setTodos} inputText={inputText} setInput={setInput}/>
      <TodoList />
    </div>
  );
}

export default App;