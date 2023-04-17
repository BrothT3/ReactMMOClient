import React, { useEffect, useState } from "react";
import LoginScreen from "./logincomponent";
import GameScreen from "./GameScreen";

function AppComponent(){
    
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
            return(<GameScreen authorization={authorization} setAuthorized={setAuthorized} setAuthorization={setAuthorization}/>);
        }
        else{
            
            return( <>
                <LoginScreen setAuthorization = {setAuthorization}/>
                </>);
        }
            
        
    }

   return GameGraphics();
}

export default AppComponent;
