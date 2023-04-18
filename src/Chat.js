import React, { useEffect, useState } from "react";



function Chat(props) {
    const gameServer = props.gameServer;
    const [chatlog, setChatLog] = useState([]);
    const [showInput, setShowInput] = useState(false);

    useEffect(() => {
        //gameServer.connect();
        document.addEventListener("keydown", handleKeyPress); 

        return () => {
            //gameServer.disconnect();
            document.removeEventListener("keydown", handleKeyPress); 
        };
    });


    const handleSubmit = (event) => {
        event.preventDefault();
        const message = event.target.message.value;
        gameServer.invoke("Chat", `${message}`);
        event.target.reset();
        setShowInput(false);
        props.handleSetTyping(false);
    }


    gameServer.onEvent("ChatMessage", response => {
        setChatLog(prevChatlog => [...prevChatlog, response]);

    });

    gameServer.onEvent("CombatMessage", response => {
        setChatLog(prevChatlog => [...prevChatlog, response]);
    });

    const handleKeyPress = (event) => {
        if (event.key === "Enter") {
            setShowInput(true);
            props.handleSetTyping(true);
        }
    }


    return (
        <>
        {/* slice to only write the last 10 messages */}
            {chatlog.slice(-10).map((message, index) => (
                <div key={index}>
                    <span style={{color : 'black', backgroundColor: 'rgba(255, 255, 255, 0.5)'}}>{message}: </span>
                </div>
            ))}

            {showInput && (
                <form onSubmit={handleSubmit}>
                    <input 
                    autoComplete="off"
                     type="text" 
                     name="message"/>

                    <button 
                    type="submit"
                    >Send</button>
                </form>
            )}
        </>
    );



}
export default Chat;


