import { useState } from "react";

function MessageInput({onMessageSent}: {onMessageSent: (message: string) => void}) {
    const [message, setMessage] = useState("");

    return (
        <div className="flex flex-row w-1/2 justify-center absolute left-[32%] top-[90vh] gap-3">
            <input 
                type="text" 
                className="bg-white rounded-md w-5/6 accent-black p-2"
                onChange={(e) => {setMessage(e.target.value)}}
                value={message}
            />
            <button 
                type="button" 
                className="outline-solid hover:bg-black hover:text-white cursor-pointer border-black rounded-md p-1"
                onClick={() => {
                    onMessageSent(message);
                    setMessage("");
                }}
            >Send
            </button>
        </div>
    );
}

export default MessageInput;
