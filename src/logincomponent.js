import React, { useCallback, useState } from "react";
import useGameServer from "./useGameServer";
import { JsonHubProtocol } from "@microsoft/signalr";



function LogInForm() {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      try {
        const response = await fetch('http://jats.web.dania-studerende.dk/authentication/login', {
          method: 'POST',
          body: JSON.stringify({
            username: userName,
            password: password
          }),
          headers: {
            'Content-Type': 'application/json'
          }
        });
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };
  
    const handleUserNameChange = (event) => {
      setUserName(event.target.value);
    };
  
    const handlePasswordChange = (event) => {
      setPassword(event.target.value);
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input 
            type="text" 
            name="userName"
            value={userName}
            onChange={handleUserNameChange}
            autoComplete="off"
          />
        </label>
        <label>
          Password:
          <input 
            type="password" 
            name="password"
            value={password} 
            onChange={handlePasswordChange}
            autoComplete="off"
          />
        </label>
        <button type="submit">Login</button>
      </form>
    );
  }
  
  export default LogInForm;
  