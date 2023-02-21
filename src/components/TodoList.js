// useState: allows us to track state in a function component
import React, { useState } from "react";
import TodoForm from "./TodoForm";

// Imports the icons used the todo list items (delete and edit)
// ****** IN ORDER FOR THESE ICONS TO WORK WE NEED TO TYPE   npm install react-icons   IN THE TERMINAL ******
import { RiCloseCircleLine } from 'react-icons/ri';
import { FiEdit } from 'react-icons/fi';


// Function to perform CRUD Operations
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
