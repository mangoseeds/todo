import React from 'react';


function Form({setInputText}){
  function inputTextHandler(e){
    console.log(e.target.value);
    setInputText(e.target.value)
  };

  // const inputTextHandler = (e) => {

  // }
  return(
      <form>
    <input onClick={inputTextHandler} onChange="text" className="todo-input" />
    <button className="todo-button" type="submit">
      <i className="fas fa-plus-square"></i>
    </button>
    <div className="select">
      <select name="todos" className="filter-todo">
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="uncompleted">Uncompleted</option>
      </select>
    </div>
  </form>
  );
}

export default Form;