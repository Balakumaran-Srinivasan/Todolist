import { useState } from "react";
 
 // file import
 import SignUpPage from "../SiginUpPage/SignUpPage";
 import SignInPage from "../SignInPage/SignInPage";
  import WelcomePage from "../WelcomePage/Welcompage";
 import TodolistPage from "../TodolistPage/TodolistPage";


export default function Main() {

// states 
const [pagetab,setPagetab]=useState("welcome");
// const[userdetails,setUserdetails]=useState(
//     {
//         username:undefined,
//          userId:undefined,
//     }
//);
  switch(pagetab)
  {
    case'signin':
    {
      return<SignInPage setPagetab={setPagetab} />

    }
    case'signup':
    {
      return<SignUpPage setPagetab={setPagetab} />

    }
    case'todo':
    {
        return <TodolistPage setPagetab={setPagetab} />
    }
     default:
    {
        return <WelcomePage setPagetab={setPagetab}/>
    }
  
  }
   
}