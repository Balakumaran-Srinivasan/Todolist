import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react';
export default function  Server() {
    const [inputvalue,setInputvalue]=useState("")
    const [obj,setObj]=useState({});
    const [refresh,setRefresh]=useState(false)

    // front end data showing data
    useEffect( ()=>{
        const requestOptions = {
            method: "GET",
            redirect: "follow"
          };
          
          fetch("http://localhost:3434/movie", requestOptions)
            .then((response) => response.json())
            .then((result) => {
              console.log(result)
              setObj(result);
            })
            .catch((error) => console.error(error));
        },[refresh])
    
    // post methoded for store the data in backend
    function handClick()
    {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        
        const raw = JSON.stringify({
           name:inputvalue   // data pass to backend
        });
        
        const requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: raw,
          redirect: "follow"
        };
        
        fetch("http://localhost:3434/movie", requestOptions)
          .then((response) => response.text())
          .then((result) => console.log(result))
          .catch((error) => console.error(error));
        
        setRefresh(!refresh);  // when re-rendering the data will also reload ...
    }
  return (
    <div>
      <input type='text' 
      value={inputvalue}
      onChange={(e)=>
        {setInputvalue(e.target.value)}}

      ></input>
      <button onClick={handClick}>Submit</button>
      <ol>
       {obj?.data?.movies_list.map((item,index)=>{
        return(<li key={index}>{item}</li>)
       })} 
       </ol>
    </div>
  )
}