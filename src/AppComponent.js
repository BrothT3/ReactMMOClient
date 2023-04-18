import React, { useEffect, useState } from "react";
import LoginScreen from "./logincomponent";
import GameScreen from "./GameScreen";

function AppComponent(){
    const [errorMsg, setErrorMsg] = useState("");
    const [authorization, setAuthorization] = useState({success: false, data :"", username: ""});
    const [authorized, setAuthorized] = useState(false);

    useEffect(()=> {
        if (authorization.success){
            setAuthorized(true);
        }
    }, [authorization]);

    const GameGraphics = () => {
        
        if(authorized)
        {
            const ass = <GameScreen authorization={authorization} setAuthorized={setAuthorized} setAuthorization={setAuthorization} setErrorMsg={setErrorMsg}/>;
            return(ass);
        }
        else{
            
            return( <>
            <h1>{errorMsg}</h1>
                <LoginScreen setAuthorization = {setAuthorization}/>
                </>);
        }
            
        
    }

   return GameGraphics();
}

export default AppComponent;
