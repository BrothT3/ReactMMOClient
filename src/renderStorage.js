

import "./game.css";
import React, { useEffect, useState } from 'react';

function Grid(props) {
    const gameServer = props.gameServer;
    const [groundArray, setGroundArray] = useState([]);
    const [clutterArray, setClutterArray] = useState([]);
    const [moveAbleArray, setMoveAbleArray] = useState([]);
    const [effectArray, setEffectArray] = useState([]);
    const [infoArray, setInfoArray] = useState([]);

    useEffect(() => {
      gameServer.connect();
      document.addEventListener("keydown", handleMovement); 

      return () => {
          gameServer.disconnect();
          document.removeEventListener("keydown", handleMovement); 
      };
  }, [gameServer]);

    gameServer.onEvent("WorldUpdate", response => {
      if(response.ground !== undefined){
        setGroundArray(response.ground);
      }
      if(response.clutter !== undefined)
      {
        setClutterArray(response.clutter);
      }
      if(response.movables !== undefined)
      {
        setMoveAbleArray(response.movables);
      }
      if(response.effects !== undefined)
      {
        setEffectArray(response.effects);
      }
      if(response.info !== undefined)
      {
        setInfoArray(response.info);
      }

    });

    function handlePlayerMovement(direction)
    {
      if(direction === "w")
      {
        gameServer.invoke("MoveDirection", "up");
      }
      if(direction === "a")
      {
        gameServer.invoke("MoveDirection", "left");
      }
      if(direction === "s")
      {
        gameServer.invoke("MoveDirection", "down");
      }
      if(direction === "d")
      {
        gameServer.invoke("MoveDirection", "right");
      }
      
    }

    const handleMovement = (event) => {
          handlePlayerMovement(`${event.key}`);
       
  }

    return (
      <div className="grid-container">
        {groundArray.map((tile, index) => (
          <img
            key={`ground-${index}`}
            className="grid-item ground"
            src={`./tiles/tile_${tile}.png`}
            alt=""
          />
        ))}
        {clutterArray.map((obj,index)=>(
          <img
          key={`clutter-${index}`}
          className="grid-item clutter"
          src={`./tiles/tile_${obj.tile}.png`}
          alt=""
          />
        ))}
        {moveAbleArray.map((obj,index)=>(
          <img
            key={`movables-${index}`}
            style={{left:(obj.xpos)*48,top:(obj.ypos)*48}}
            className={`grid-item moveable`}
            src={`./tiles/tile_${obj.tile}.png`}
            alt="bad path"
          />
        ))}
       
      </div>
    );
    
    }
  

  export default Grid;
  
