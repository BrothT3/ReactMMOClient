import React, { useState } from "react";


function LogInForm(){
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');


const handleChange = (event) => {
    setUserName(event.target.userName);
    setPassword(event.target.password);

} 



return (

    <form>
        <label>
            Name:
            <input type = "text" value={userName} onChange={handleChange}></input>
        </label>
        <label>
            Password:
            <input type = "password" value={password} onChange={handleChange}></input>
        </label>
    </form>

);

}

export default LogInForm;
