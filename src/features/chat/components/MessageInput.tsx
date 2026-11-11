import { useState } from "react";
import SendMessageButton from "./SendMessageButton.tsx";

function MessageInput({onMessageSent}: {onMessageSent: (message: string) => void}) {
    const [message, setMessage] = useState("");

    const handleMessageSent = () => {
        onMessageSent(message);
        setMessage("");
    }

    return (
        <div className="flex flex-row w-full justify-center gap-3 p-8 sticky">
            <textarea 
                className="rounded-md w-1/2 p-2 bg-primary outline-none text-white resize-none field-sizing-content"
                rows={1}
                spellCheck
                onChange={(e) => {setMessage(e.target.value)}}
                value={message}
                onKeyDown={(e) => {
                    if (e.key === "Enter" && message !== "") handleMessageSent();
                }}
                placeholder="Send a message..."
                autoFocus={true}
            />
            <SendMessageButton onSend={handleMessageSent} message={message}/>
        </div>
    );
}

export default MessageInput;
