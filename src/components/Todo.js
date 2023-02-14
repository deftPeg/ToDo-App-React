// import React and useState hook from react
// useState: allows us to track state in a function component
// import todoForm component
// the last two lines imports the icons that I use in the todo list items (delete and edit)
// ****** IN ORDER FOR THESE ICONS TO WORK I NEEDED TO TYPE   npm install react-icons   IN THE TERMINAL ******
import React, { useState } from 'react';
import TodoForm from './TodoForm';
import { RiCloseCircleLine } from 'react-icons/ri';
import { FiEdit } from 'react-icons/fi';

// declaring the function that actually lets us run our entire app
// it takes parameters, todos(an array of all the todos), completeTodo (function that marks todo as completed), removeTodo(function that removes the todo from the list) and updateTodo(function that updates the todo if edited)
let Todo = ({ todos, completeTodo, removeTodo, updateTodo }) => {
  // function that allows us to edit a specific task according to it's id.
  let [edit, setEdit] = useState({
    id: null,
    value: ''
  });

  // function within todo that updates our todo list. Used as well with the edit button to edit a todo input form
  // again using the todo items id, it marks it as the item to be edited and passes the new value (string)
  let submitUpdate = value => {
    updateTodo(edit.id, value);
    // setting the edit to no values for start
    setEdit({
      id: null,
      value: ''
    });
  };

  // if there is an edit to an item, once the submit button is clicked, render the submitUpdate function 
  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  // this is what our function actually outputs and renders if invoked
  // iterate through the todo array looking for a specific todo and it's id (index)
  return todos.map((todo, index) => (
    <div
    // if todo is complete set class name to todo-row complete
      className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
      key={index}
    >
      {/* find the specific todo based on it's id and on click mark it completed */}
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>
      {/* Create div for the icons. 
      for the icons to work we need to type     npm install react-icons    in the
      Within this div render the remove icon and on click have it remove the todo based on it's id */}
      <div className='icons'>
        <RiCloseCircleLine
          onClick={() => removeTodo(todo.id)}
          className='delete-icon'
        />
        {/* render the edit icon and on click change the text using the setEdit function */}
        <FiEdit
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
          className='edit-icon'
        />
      </div>
    </div>
  ));
};

export default Todo;
