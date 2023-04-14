import React, { useState } from "react";



function Chat(props) {
    const gameServer = props.gameServer;
    const [chatlog, setChatLog] = useState([]);
    gameServer.connect();

    const handleChatLog = (props) => {
        setChatLog(prevChatlog => [...prevChatlog, props]);
    }

    gameServer.onEvent("ChatMessage", response => {
        handleChatLog(response);
        console.log(chatlog);

    });






    return (
        <>
            {chatlog.map((message, index) => (
                <div key={index}>
                    <span>{message}: </span>
                </div>
            ))}
        </>
    );



}
export default Chat;