import React, { useCallback, useState } from "react";
import useGameServer from "./useGameServer";
import { JsonHubProtocol } from "@microsoft/signalr";



function LogInForm(){
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    


 const handleChange = (event) => {
    setUserName(event.target.userName);
    setPassword(event.target.password);} 

    async function Login(event) {
        event.preventDefault();
        let response;
        let tmpName = event.target.username;
        let tmpPw = event.target.password;
        return fetch('http://jats.web.dania-studerende.dk/authentication/login', {
          method: 'POST',
          body: JSON.stringify({
            "username": tmpName,
            "password": tmpPw
          }),
          headers: {
            'Content-Type': 'application/json'
          }
        }).then(resp => {
            response = resp;
            return response.json();
        }).then(json => {
            return {
                resp : response,
                json : json,
                
            };
        })
       
       
         
        // console.log(response);
        // return response;

      }

   

 return (

    <form onSubmit={Login}>
        <label>
            Name:
            <input 
            type = "text" 
            name="userName"
            value={userName}
             onChange={handleChange} 
             autoComplete="off"></input>
        </label>
        <label>
            Password:
            <input 
            type = "password" 
            name="password"
            value={password} 
            onChange={handleChange}
            autoComplete="off"></input>
        </label>

        <button type="submit">Login</button>

    </form>

);

}

export default LogInForm;
