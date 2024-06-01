 
import { useState } from 'react';
import './todolistpage.css'

export default function TodolistPage({setPagetab}) {

  const [arr, setArr] = useState([]);
  const [inputValue, setInputValue] = useState("");
  
  function handleClick() {
      if (inputValue !== "") {
          setArr([...arr, inputValue]);
          setInputValue("")
      }
  }
  function handleDeleteItems(idx) {
      let result_arr = arr.filter((value, index) => {
          return index !== idx;
      });
      setArr(result_arr);
  }
  function handleEditItems(idx) {
      let updatedContent = prompt("your new content");
      if (updatedContent !== "") {
          arr[idx] = updatedContent;
          setArr([...arr]);
      }
  }
  return (
      <div  className="todo-list">
          <h1>TODO items:</h1>
          <input type="text" 
          value={inputValue} 
          onChange={(e) => setInputValue(e.target.value)
            
          } 
          placeholder='Enter new task'/>
          <div className='buttons'>
          <button className='button'
          onClick={handleClick}>add</button>
          <button className='button'
           onClick={()=>setPagetab("signin")}>Logout</button>
          </div>
          <ol>
              {
                  arr.map((todo, index) => {
                      return (
                          <li key={index} className='todo-item'>
                               <span>{todo}</span>
                               <div className='todo-actions'>
                              <button 
                              onClick={() => handleDeleteItems(index)}
                              className='delete-btn'>Delete</button>
                              
                              <button 
                              onClick={() => handleEditItems(index)}
                              className="edit-btn">Edit</button>
                              </div>
                          </li>
                      );
                  })
              }
          </ol>
      </div>
  );
}