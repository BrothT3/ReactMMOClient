import React, { useEffect, useState } from "react";
import LoginScreen from "./logincomponent";

function AppComponent(){
    
    const [authorization, setAuthorization] = useState("");
    const [authorized, setAuthorized] = useState(false);

    useEffect(()=> {
        if (authorization !== ""){
            setAuthorized(true);
        }
    }, [authorization]);

    const GameGraphics = () => {
        
        if(authorized)
        {
            return(<div>Test</div>);
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
