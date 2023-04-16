import React from "react";
import useGameServer from "./useGameServer";
import Chat from "./Chat";
import Grid from "./renderStorage"
import "./GameScreen.css";







function GameScreen(props)
{
    const authorization = props.authorization;
    const gameServer = useGameServer("http://jats.web.dania-studerende.dk/gamehub",authorization.data, LostConnection);
    gameServer.connect();
   
    function LostConnection(){
        console.log("dun fucked up");
    }
   
    return(
     
        <>
        {/* <div>{grid()}</div>
        <div><Chat gameServer= {gameServer}/></div> */}
        <div className="container">
            <div className="grid">
                <Grid gameServer= {gameServer}/>
            </div>
            <div className="chat">
                <Chat gameServer = {gameServer} />
                </div>
            
        </div>
        
        
        </>

    );

}

export default GameScreen;