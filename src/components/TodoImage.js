// import react & svg file as a react component
import React from 'react';

let TodoImage = ()=>{
  return (
    <div>
  <img src={require('../assets/todoICON-01.svg').default} alt='mySvgImage' className = "todo-image"/>
</div>
  );
}

export default TodoImage;