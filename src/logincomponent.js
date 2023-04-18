import React, { useState } from "react";

function LoginScreen(props) {
  const [loginStatus, setLoginStatus] = useState('Please Enter Your Credentials');

  const handleSetData = (newData) => {
    props.setAuthorization(newData);

    if(!newData.success)
    {
      setLoginStatus("Wrong Username Or Password");
    }
  };

  return (
    <div>
      <LogInForm setData={handleSetData} loginStatus={loginStatus} setLoginStatus={setLoginStatus} />
    </div>
  );
}

function LogInForm(props) {
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
      let userData = {success: data.success, data: data.data, username: userName }
      props.setData(userData);
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
        <h1>{props.loginStatus}</h1>
        <button type="submit">Login</button>
        {props.loginStatus === "Wrong Username Or Password" && (
          <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", backgroundColor: "rgba(0, 0, 0, 0.5)", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div style={{ backgroundColor: "white", padding: "20px", borderRadius: "5px", textAlign: "center" }}>
              <h2>Login Failed</h2>
              <p>Please check your username and password and try again.</p>
              <button onClick={() => props.setLoginStatus("Please Enter Your Credentials")}>OK</button>
            </div>
          </div>
        )}
      </form>
    );
  }

  export default LoginScreen;
  