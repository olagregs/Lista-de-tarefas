import React from 'react';

import './App.css';
import Form from './components/form';
import TodoList from './components/todoList';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Lista de Tarefas</h1>
      </header>

      <Form />
      <TodoList />
    </div>
  );
}

export default App;
