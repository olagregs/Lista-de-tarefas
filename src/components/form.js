import React from 'react';

const Form = ({ setInput, todos, setTodos, inputText }) => {
  const  inputHandler = (e) => {
    console.log(e.target.value);
    setInput(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      {text: inputText, completed: false, id: Math.random() * 1000}
    ]);
    setInput("");
  };
  
  return(
    <form>
      <input value={inputText} onChange={inputHandler} type="text" className="todo-input" />
      <button onClick={submitHandler} className="todo-btn" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>

      <div className="select">
        <select className="filter-todo"  name="todos">
          <option value="all">Todos</option>
          <option value="completed">Completos</option>
          <option value="incompleted">Incompletos</option>
        </select>
      </div>
    </form>
  );
}

export default Form;