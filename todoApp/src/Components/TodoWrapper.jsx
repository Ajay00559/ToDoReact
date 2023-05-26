import React, { useState } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";
import { v4 as uuidv4 } from "uuid";
const TodoWrapper = () => {
  const [todoList, setTodoList] = useState([]);
  const addTodoList = (todo) => {
    setTodoList([
      ...todoList,
      { id: uuidv4(), task: todo,isEditing: false },
    ]);
  };
  const deletetodo = (id) => {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  };
//   const  updatetask = (id) => {
//     setTodoList(
//       todoList.map((task) =>
//         task.id == id ? { ...task, isEditing: !task.isEditing } : task
//       )
//     );
//   };
  return (
    <div className="todowrapper">
      <TodoForm addTodoList={addTodoList} />
      {todoList.map((item, index) => {
        return <Todo key={index} item={item} deletetodo={deletetodo} />;
      })}
      {/* <Todo todoList={todoList}/> */}
    </div>
  );
};

export default TodoWrapper;
