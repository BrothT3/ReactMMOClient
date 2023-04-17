import { useEffect, useState } from "react";



function Player(props){
    const gameServer = props.gameServer;
    const [movement, setMovement] = useState('');

     useEffect(() => {
        gameServer.connect();
        document.addEventListener("keydown", handleMovement); 

        return () => {
            gameServer.disconnect();
            document.removeEventListener("keydown", handleMovement); 
        };
    }, [gameServer]);


  const handleMovement = (event) => {
        if (event.key === "W") {
            setMovement("up");
           props.handlePlayerMovement(movement);
        }
    }

    return handleMovement;

}

export default Player;