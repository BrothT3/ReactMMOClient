import React, { useState } from "react";

function LoginScreen(props) {

  const handleSetData = (newData) => {
    props.setAuthorization(newData);
  };

 // setData(JSON.stringify(newData));
  return (
    <div>
      <LogInForm setData={handleSetData} />
      {/* Pass setData as a prop to LogInForm */}    
    </div>
  );




function LogInForm(props) {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [loginStatus, setLoginStatus] = useState('Please Enter Your Credentials');
  
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
        let userData = {success: data.success, data: data.data, username: userName }
        props.setData(userData);

        if(!data.success)
        {
          setLoginStatus("Wrong Username Or Password");
        }
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

    const handleLoginStatus = (event) => {
      setLoginStatus(event.target.value);
    }

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
      <h1>{loginStatus}</h1>
        <button type="submit">Login</button>
      </form>
    );
  }
}
  export default LoginScreen;
  