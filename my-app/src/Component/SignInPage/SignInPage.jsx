import "./signinpage.css";
import { useState } from "react";

export default function SignInPage({ setPagetab }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleClick() {
    // console.log(username);
    // console.log(password);
    if (username === "admin" && password === "admin") {
      setPagetab("todo");
    }
  }
  return (
    <div className="login-container">
      <h1>Welocme Back!</h1>
      <div className="input-group">
        <input
          type="text"
          placeholder="username"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />

        <input
          type="text"
          placeholder="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </div>
      <span className="forget-password">Do you forget password ?</span>
      <div className="button-group">
        <button onClick={handleClick} className="button">
          Submit
        </button>
        <button 
        className="button"
        onClick={()=>setPagetab('signup')}>Sign Up</button>
      </div>
    </div>
  );
}
