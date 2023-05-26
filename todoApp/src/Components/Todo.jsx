import React from "react";
import 'remixicon/fonts/remixicon.css'
const Todo = ({item, deletetodo}) => {
    console.log(item,deletetodo)
  return <div className="todo">
          <h3>{item.task}</h3>

           <div>
           <i className="ri-edit-box-fill" onClick={()=>update(task.id)}></i>
           <i className="ri-edit-box-fill"  onClick={()=>deletetodo(item.id)}></i>
           </div>
  </div>;
};

export default Todo;
