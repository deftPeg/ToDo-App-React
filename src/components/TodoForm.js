import React, { useState, useRef } from "react";


function TodoForm(props) {
  //Check if user is trying to update then display the value from props otherwise we will display null or ""
  const [input, setInput] = useState(props.edit ? props.edit.value : "");

  //useRef(initialValue) is a built-in React hook that accepts one argument as the initial value and returns a reference.
  //A reference is an object having a single property “current”, which can be accessed and changed (mutated).
  const inputRef = useRef(null);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    // the preventDefault() method is used to prevent the default behavior of an event from occurring
    e.preventDefault();

    //here we have provided id as random number which will help us while updating or deleting the task
    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });

    setInput("");
  };

  return (
    <form className="todo_form">
      {/* In react we use "?" for conditional statement like if-else.
       we have used, props.edit ?(if) show update button : (else) show Add button */}

      {props.edit ? (
        <>
          <input
            placeholder="Update your todo item"
            value={input}
            onChange={handleChange}
            name="text"
            ref={inputRef}
            className="input-edit"
          />
          <button onClick={handleSubmit} className="edit-button">
            Update
          </button>
        </>
      ) : (
        <>
          <input
            placeholder="Please enter your todo here"
            value={input}
            onChange={handleChange}
            name="text"
            className="input-add"
            ref={inputRef}
          />
          <button onClick={handleSubmit} className="add-button">
            Add
          </button>
        </>
      )}
    </form>
  );
}

export default TodoForm;
