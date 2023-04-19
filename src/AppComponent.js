import React, { useEffect, useState } from "react";
import LoginScreen from "./logincomponent";
import GameScreen from "./GameScreen";

function AppComponent(){
    const [showError, setShowError] = useState(false);
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
            const gs = <GameScreen authorization={authorization} setAuthorized={setAuthorized} setAuthorization={setAuthorization} setShowError={setShowError} setErrorMsg={setErrorMsg}/>;
            return(gs);
        }
        else{
            return( <>
            {showError === true && (
                <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", backgroundColor: "rgba(0, 0, 0, 0.5)", display: "flex", justifyContent: "center", alignItems: "center" }}>
                  <div style={{ backgroundColor: "white", padding: "20px", borderRadius: "5px", textAlign: "center" }}>
                    <h2>Disconnected</h2>
                    <p>{errorMsg}</p>
                    <button onClick={() => setShowError(false)}>OK</button>
                  </div>
                </div>
              )}
                <LoginScreen setAuthorization = {setAuthorization}/>
                </>);
        }
            
        
    }

   return GameGraphics();
}

export default AppComponent;
