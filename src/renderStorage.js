
import "./game.css";
import React, { useEffect, useState } from 'react';


// const ground = [<img alt="" className="grid-item ground" src="./tiles/tile_01.png" />,<img alt="" className="grid-item ground" src="./tiles/tile_01.png" />,<img alt="" className="grid-item ground" src="./tiles/tile_02.png" />];

// const cluter = [];
// const moveable = [<img alt="" style={{left:5*48,top:3*48}} className="grid-item moveable" src="./tiles/tile_chicken.png"/>,<img alt="" style={{left:2*48,top:1*48}} className="grid-item moveable" src="./tiles/tile_chicken.png"/>];
// const effect = [];


// function grid(){
//     for (let i = 0; i < 100; i++) { //TEMPORARY. DELETE LATER!!!!-----------------------------------------------------------------------------
//         ground.push(<img alt="" className="grid-item ground" src="./tiles/tile_01.png" />)
//     } //End temporary

//     const gridContainer = (<div className="grid-container">{ground}{cluter}{effect}{moveable}</div>);
//    // root.render(gridContainer);
//    // gridRender(gridContainer);
//     return gridContainer;

// }

function Grid(props) {
    const gameServer = props.gameServer;
    const [tileArray, setTileArray] = useState([]);

    //it keeps adding new arrays of the response instead of updating existing ones
    gameServer.onEvent("WorldUpdate", response => {

      setTileArray([...tileArray, {
        info: response.info,
        ground: response.ground,
        clutter: response.clutter,
        movables: response.movables
      }]);
    });


    return (
        <div className="grid-container">
          {tileArray.map((tile, index) => (
            <React.Fragment key={index}>
              {tile.ground ? (
                <img
                  className="grid-item ground"
                  src={`./tiles/tile_${tile.ground[index]}.png`}
                  alt="tile"
                />
              ) : undefined}
              {tile.clutter ? (
                <img
                  className="grid-item clutter"
                  src={`./tiles/tile_${tile.clutter[index].tile}.png`}
                  alt="clutter"
                />
              ) : undefined}
              {tile.movables ? (
                tile.movables.map((movable, idx) => (
                  <img
                    className="grid-item movable"
                    src={`./tiles/tile_${movable.tile}.png`}
                    alt="movable"
                    key={`${index}-${idx}`}
                  />
                ))
              ) : undefined}
            </React.Fragment>
          ))}
        </div>
      );
    }
  

  export default Grid;
  


    //     gameServer.onEvent("WorldUpdate", response => {
    //     const updatedTile = {
    //       info: response.info,
    //       ground: response.ground,
    //       clutter: response.clutter,
    //       movables: response.movables
    //     };
    //     const index = tileArray.findIndex(tile => tile.info === updatedTile.info);
    //     const updatedTileArray = [...tileArray];
    //     if (index === -1) {
    //       updatedTileArray.push(updatedTile);
    //     } else {
    //       updatedTileArray[index] = updatedTile;
    //     }
    //     setTileArray(updatedTileArray);

    //   });


    // return (
    //     <div className="grid-container">
    //       {tileArray.map((tile, index) => (
    //         <React.Fragment key={index}>
    //           {tile.ground && (
    //             <img
    //               className="grid-item ground"
    //               src={`./tiles/tile_${tile.ground[index]}.png`}
    //               alt="ground"
    
    //             />
    //           )}
    //           {tile.clutter && (
    //             <img
    //               className="grid-item clutter"
    //                src={`./tiles/tile_${tile.clutter[index].tile}.png`}
    //                alt="clutter"
                   
    //             />
    //           )}
    //           {tile.movables && tile.movables.map((movable, idx) => (
    //             <img
    //               className="grid-item movable"
    //               src={`./tiles/tile_${movable.tile}.png`}
    //               alt="movable"
    //               key={`${index}-${idx}`}
    //             />
    //           ))}
    //         </React.Fragment>
    //       ))}
    //     </div>
    //   );