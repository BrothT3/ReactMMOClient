import React from "react";
import useGameServer from "./useGameServer";




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
        <div>test</div>
        </>
    );

}

export default GameScreen;