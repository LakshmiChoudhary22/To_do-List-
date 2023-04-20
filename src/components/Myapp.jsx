import React, { useState } from 'react'
import ToDoList from './ToDoList';

export default function Myapp() {

  const [inputList, setInputList] = useState("");
  const [items, setItems] = useState([]);

  const itemEvent = (event) => {
    setInputList(event.target.value)
  };

  const listOfItems = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList]
    })
    setInputList("");
  };

  const deleteItems=(id)=>{
    // console.log("deleted");
    setItems((oldItems)=>{
      return oldItems.filter((arrElement,index)=>{
          return index !== id;
      })
    })
}
 
  return (
    <div className='main-div'>
      <div className='center-div'>
        <br />
        <h1>ToDo List</h1>
        <br />
        <input type="text" placeholder="Add a Items"
          value={inputList}
          onChange={itemEvent} />
        <button onClick={listOfItems}>+</button>
        <ol>
          {items.map((itemval,index) => {
            return <ToDoList 
            key={index} 
            id={index} 
            text={itemval} 
            onSelect={deleteItems}
            />;
          })}
        </ol>
      </div>
    </div>
  )
}
