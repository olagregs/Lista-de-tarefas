import React from 'react';

const Form = () => {
  return(
    <form>
      <input type="text" className="todo-input" />
      <button className="todo-btn" type="submit">
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