import React, { useEffect, useState } from "react";
import LoginScreen from "./logincomponent";
import grid from "./renderStorage";

function AppComponent(){
    
    const [authorization, setAuthorization] = useState({success: false});
    const [authorized, setAuthorized] = useState(false);

    useEffect(()=> {
        if (authorization.success){
            setAuthorized(true);
        }
    }, [authorization]);

    const GameGraphics = () => {
        
        if(authorized)
        {
            console.log(grid())
            return(<div className="grid-container">
            <img alt="" className="grid-item ground" src="./tiles/tile_01.png" />
            <img alt="" className="grid-item ground" src="./tiles/tile_01.png" />
        </div>);
            
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
