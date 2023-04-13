import React from "react";
import LoginScreen from "./logincomponent";

class App extends React.Component{
    constructor() {
        super();
        this.state = { authoricationbs: "" };
        this.authorized = false;
    }

    setAuthorization= (data)=>{
        this.state.authoricationbs =(data);
        this.authorized = true;
    };
     
        //this.state.authoricationbs = data;
    

    render() {
        if(!this.authorized)
        {
            return (
                <>
                    <LoginScreen setAuthorization={this.setAuthorization}/>
                </>
            );
        }
        else{
            return(
                <>

                {/* andet komponent */}
                </>
            );
        }
    
}
}
export default App;
