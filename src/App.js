import React, { useState } from "react";
import LoginScreen from "./logincomponent";

class App extends React.Component {
    constructor() {
        super();
        this.state = { authorizationbs: "" };
        this.authorized = false;
    }

    setAuthorization = (data) => {
        this.setState({ authorizationbs: data});
    };  

    shouldComponentUpdate(nextProps, nextState){
        return nextState.authorizationbs !== this.state.authorizationbs;
    }

    GameGraphics = (props) => {
        if(props === "")
        {
            return( <>
            <LoginScreen setAuthorization = {this.setAuthorization}/>
            </>);
        }
        else{
            return( <h1>test</h1>);
        }
    }

    render() {
       return this.GameGraphics(this.state);
    }
}

export default App;
