import React from "react";
import useGameServer from "./useGameServer";
import Chat from "./Chat";
import grid from "./renderStorage"





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
        <div><Chat gameServer= {gameServer} /></div>
        </>

        grid()

    );

}

export default GameScreen;
