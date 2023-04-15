import React, { useEffect, useState } from "react";



function Chat(props) {
    const gameServer = props.gameServer;
    const [chatlog, setChatLog] = useState([]);
    const [showInput, setShowInput] = useState(false);

    useEffect(() => {
        gameServer.connect();
        document.addEventListener("keydown", handleKeyPress); // step 2

        return () => {
            gameServer.disconnect();
            document.removeEventListener("keydown", handleKeyPress); // clean up
        };
    }, [gameServer]);


    const handleSubmit = (event) => {
        event.preventDefault();
        const message = event.target.message.value;
        gameServer.invoke("Chat", `${message}`);
        event.target.reset();
        setShowInput(false);
    }


    gameServer.onEvent("ChatMessage", response => {
        setChatLog(prevChatlog => [...prevChatlog, response]);

    });

    const handleKeyPress = (event) => {
        if (event.key === "Enter") {
            setShowInput(true);
        }
    }






    return (
        <>
            {chatlog.map((message, index) => (
                <div key={index}>
                    <span>{message}: </span>
                </div>
            ))}

            {showInput && (
                <form onSubmit={handleSubmit}>
                    <input type="text" name="message" />
                    <button type="submit">Send</button>
                </form>
            )}
        </>
    );



}
export default Chat;