import React, { useState } from "react";



function Chat(props) {
    const gameServer = props.gameServer;
    const [chatlog, setChatLog] = useState([]);
    //let chatLog = [];
   // let chatelements = chatLog.map(m => <p>{m}</p>)
    gameServer.connect();

    const handleChatLog=(props) =>{
        setChatLog(props);
    }

    gameServer.onEvent("ChatMessage", response => {
        handleChatLog(response);
        console.log(chatlog);

    });






    return (
        <>
            {chatlog}
        </>
    );



}
export default Chat;