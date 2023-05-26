import React, { useState } from "react";

const TodoForm = ({addTodoList}) => {
  const [value, setValue] = useState("");
//   console.log(value)
  const submitHandler = (e) => {
      e.preventDefault();
       addTodoList(value)
       setValue('')
  };
  return (
    <div>
      <form className="todoform" onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="what is the task today?"
          className="todoinput"
          value={value}
          onChange={(e) =>setValue(e.target.value)}
        />
        <button type="submit">Add task</button>
      </form>
    </div>
  );
};

export default TodoForm;
