
// importing from react
// useState: allows us to track state in a function component
// useEffect: this is a hook. It tells react that the component needs to do something after render
// useRef: this is also a hook. It allows react to store a mutable value that does not cause a re-render when updated
import React, { useState, useEffect, useRef } from 'react';

// Function to set the state of the input task
function TodoForm(props) {
  // if we are editing the task, without deleting the previous text, it passes the new string to the value.
  let [input, setInput] = useState(props.edit ? props.edit.value : '');

  // This part of the code adds a focus effect to our items in the todo list.
  // using the hook useRef to reference an input field. (By default the add a todo input field will be focused)  
  let inputRef = useRef(null);

  // using the hook useEffect, find the current field that was chosen to be edited and focus on it
  useEffect(() => {
    inputRef.current.focus();
  });

  // function to handle the input text. Sets the input to the value of the string typed
  let handleChange = e => {
    setInput(e.target.value);
  };

  // function to keep the page from refreshing when clicking the submit button (the default event)
  let handleSubmit = e => {
    e.preventDefault();
  //  function to create a unique id number for every task submitted and to store the task inputted to the text key.
    props.onSubmit({
      // generates a random number with a value <= 1000 for the id
      id: Math.floor(Math.random() * 1000), 
      text: input
    });
  // clears the previous input from the input field
    setInput('');
  };

  // renders the input field and submit button on the screen. Used form tag for this.
  return (
    <form onSubmit={handleSubmit} className='todo-form'>
      {props.edit ? (
        <>
          <input
            placeholder='Edit your task'
            value={input}
            onChange={handleChange}
            name='text'
            ref={inputRef}
            className='todo-input edit'
          />
          <button onClick={handleSubmit} className='todo-button edit'>
            Update
          </button>
        </>
      ) : (
        <>
          <input
            placeholder='Enter a task'
            value={input}
            onChange={handleChange}
            name='text'
            className='todo-input'
            ref={inputRef}
          />
          <button onClick={handleSubmit} className='todo-button'>
            Add task
          </button>
        </>
      )}
    </form>
  );
}

export default TodoForm;
