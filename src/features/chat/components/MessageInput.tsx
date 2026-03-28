import { useState } from "react";
import {SendHorizonal} from "lucide-react";

function MessageInput({onMessageSent}: {onMessageSent: (message: string) => void}) {
    const [message, setMessage] = useState("");

    const handleMessageSent = () => {
        onMessageSent(message);
        setMessage("");
    }

    return (
        <div className="flex flex-row w-1/2 justify-center absolute left-[32%] top-[90vh] gap-3">
            <input 
                type="text" 
                className="rounded-md w-5/6 p-2 bg-primary outline-none text-white"
                onChange={(e) => {setMessage(e.target.value)}}
                value={message}
                onKeyDown={(e) => {
                    if (e.key === "Enter") handleMessageSent();
                }}
                placeholder="Send a message..."
                autoFocus={true}
            />
            <button 
                type="button" 
                className="text-on-primary cursor-pointer rounded-md p-1 hover:bg-on-primary hover:text-primary relative -left-11"
                onClick={handleMessageSent}
            >
                <SendHorizonal />
            </button>
        </div>
    );
}

export default MessageInput;
