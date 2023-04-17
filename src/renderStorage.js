
import Player from "./Player";
import "./game.css";
import React, { useState } from 'react';

function Grid(props) {
    const gameServer = props.gameServer;
    const [groundArray, setGroundArray] = useState([]);
    const [clutterArray, setClutterArray] = useState([]);
    const [moveAbleArray, setMoveAbleArray] = useState([]);
    const [effectArray, setEffectArray] = useState([]);
    const [infoArray, setInfoArray] = useState([]);



    gameServer.onEvent("WorldUpdate", response => {
      if(response.ground !== undefined){

        setGroundArray(response.ground);
      }
      if(response.clutter !== undefined)
      {
        setClutterArray(
          response.clutter);
      }
      if(response.movables !== undefined)
      {
        setMoveAbleArray([moveAbleArray, {
          movables : response.movables
        }]);
      }
      if(response.effects !== undefined)
      {
        setEffectArray([effectArray, {
          effects : response.effects
        }]);
      }
      if(response.info !== undefined)
      {
        setInfoArray([infoArray,{
          info : response.info
        }]);
      }

    });

    function handlePlayerMovement(direction)
    {
      if(direction !== "")
      {
        gameServer.invoke("Movement", `${direction}`);
      }
      
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
          <Player gameServer={gameServer} handlePlayerMovement={handlePlayerMovement}/>
      </div>


    );
    
    }
  

  export default Grid;
  
