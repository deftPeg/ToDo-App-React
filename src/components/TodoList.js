// importing from react 
// useState: allows us to track state in a function component
// importing components required to set up the todoList
import React, { useState } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';
import TodoImage from './TodoImage';

// function to set state of the todo list
function TodoList() {
  let [todos, setTodos] = useState([]);


  // FUNCTION THAT ADDS A TODO
  // this is something I found on stack overflow. It uses the pattern expression
  // it tests the input so that if someone types in spaces, the spaces are ignored
  // this is how I understood the pattern expression 
  // /^\= look for expression that does not include, 
  // s= whitespace character, 
  // * = 0 or more times $=string
  let addTodo = todo => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    // declare array to pass in the new todo (...induces spread) to spread or copy in the other todos
    let newTodos = [todo, ...todos];

    // sets the value of todos to the newTodos declared above
    setTodos(newTodos);
    // console.log(todo, ...todos);
  };



  // FUNCTION THAT UPDATES THE TODO based on it's id
  // again here, using the pattern expression to ignore any white spaces inputted in the text which is assigned to newValue
  let updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    // set the todos by iterating through to todos array, find the required tasks id 
    // and assign the newValue for it's text based on the updateTodo (newValue)
    setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
  };



  // FUNCTION TO REMOVE A TODO where
  // based on the id of the todo requested
  // we pass all the items from the todos array that do not match the id of the todo requested into a new array removeArr
  let removeTodo = id => {
    let removedArr = [...todos].filter(todo => todo.id !== id);

  // set the Todos to the todos that were not removed (Update them)
    setTodos(removedArr);
  };

  // function to mark a todo as complete
  // find the todo based on it's id
  // toggle it's isComplete status
  let completeTodo = id => {
    let updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    // update the todos
    setTodos(updatedTodos);
  };


  // RENDER THE FORM WINDOW
  // input field (TodoForm)
  // the list of todos (Todo) with their appropriate functions (complete, remove, update(or edit))
  return (
    <>
      <TodoImage/>
      <h1>Tasks that need to be done</h1>
      {/* takes the inputted task and adds it to the todo list */}
      <TodoForm onSubmit={addTodo} />
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
    </>
  );
}

export default TodoList;
