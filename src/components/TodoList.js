import React, { useState } from "react";
import TodoForm from "./TodoForm";
import { RiCloseCircleLine } from 'react-icons/ri';
import { FiEdit } from 'react-icons/fi';

function TodoList({ todos, updateTodo, removeTodo, completeTodo }) {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });


  const submitUpdate = (value) => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return todos.map((todo, index) => (
    <>
    
      <div
        className={todo.isComplete ? "todo-complete" : "todo-container"}
        key={index}
      >
        <div key={todo.id} onClick={() => completeTodo(todo.id)}>
          {todo.text}
        </div>

        <div className="icons">
        <FiEdit
            onClick={() => setEdit({ id: todo.id, value: todo.text })}
            className="edit-icon"
          />
          <RiCloseCircleLine
            onClick={() => removeTodo(todo.id)}
            className="delete-icon"
          />

        </div>
      </div>
    </>
  ));
}

export default TodoList;
