const ground = [<img alt="" className="grid-item ground" src="./tiles/tile_01.png" />
,<img alt="" className="grid-item ground" src="./tiles/tile_01.png" />
,<img alt="" className="grid-item ground" src="./tiles/tile_02.png" />];
const cluter = [];
const movable = [<img alt="" style={{left:5*48,top:3*48}} className="grid-item movable" src="./tiles/tile_chicken.png"></img>];
const effect = [];
function grid(){
    const gridContainer = (<div className="grid-container">{ground}{movable}{cluter}{effect}</div>);
return gridContainer
}
export default grid