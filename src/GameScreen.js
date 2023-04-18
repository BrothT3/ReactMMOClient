import React, { useState } from "react";
import useGameServer from "./useGameServer";
import Chat from "./Chat";
import Grid from "./renderStorage"
import "./GameScreen.css";







function GameScreen(props)
{
    const authorization = props.authorization;
    const gameServer = useGameServer("http://jats.web.dania-studerende.dk/gamehub",authorization.data, LostConnection);
    const [isTyping, setIsTyping] = useState(false);
    gameServer.connect();
   
    function handleSetTyping(value){
        setIsTyping(value);
    }
    function LostConnection(){
        props.setShowError(true)
        props.setErrorMsg("Serverside disconnect: Too many requests!")
        props.setAuthorized(false);
        let userData = {success: false, data: "", username: "" }
        props.setAuthorization(userData);
    }
   
    return(
     
        <>
        <div className="container">
            <div className="grid">
                <Grid gameServer= {gameServer} isTyping={isTyping}/>
            </div>
            <div className="chat">
                <Chat gameServer = {gameServer} handleSetTyping={handleSetTyping} />
                </div>
            
        </div>
        
        
        </>

    );

}

export default GameScreen;