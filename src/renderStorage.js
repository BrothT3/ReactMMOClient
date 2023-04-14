
import ReactDOM from 'react-dom/client';
import "./game.css";
const root = ReactDOM.createRoot(document.getElementById('root'));

const ground = [<img alt="" className="grid-item ground" src="./tiles/tile_01.png" />,<img alt="" className="grid-item ground" src="./tiles/tile_01.png" />,<img alt="" className="grid-item ground" src="./tiles/tile_02.png" />];

const cluter = [];
const moveable = [<img alt="" style={{left:5*48,top:3*48}} className="grid-item moveable" src="./tiles/tile_chicken.png"/>,<img alt="" style={{left:2*48,top:1*48}} className="grid-item moveable" src="./tiles/tile_chicken.png"/>];
const effect = [];


function grid(){
    for (let i = 0; i < 100; i++) { //TEMPORARY. DELETE LATER!!!!-----------------------------------------------------------------------------
        ground.push(<img alt="" className="grid-item ground" src="./tiles/tile_01.png" />)
    } //End temporary
    
    const gridContainer = (<div className="grid-container">{ground}{cluter}{effect}{moveable}</div>);
    root.render(gridContainer);
}
export default grid;