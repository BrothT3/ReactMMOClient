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
        console.log("dun fucked up");
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