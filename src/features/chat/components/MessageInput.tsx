import { useState } from "react";
import useChatStore from "@/shared/store/chatStore.ts";
import {useCreateChat} from "../hooks/useCreateChat.ts";
import {useSelectedChat} from "@/shared/hooks/useSelectedChat.ts";

function MessageInput({onMessageSent}: {onMessageSent: (message: string) => void}) {
    const [message, setMessage] = useState("");

    return (
        <div className="flex flex-row w-1/2 justify-center absolute left-[32%] top-[90vh] gap-3">
            <input 
                type="text" 
                className="rounded-md w-5/6 p-2 bg-primary outline-none text-white"
                onChange={(e) => {setMessage(e.target.value)}}
                value={message}
            />
            <button 
                type="button" 
                className="outline-1 outline-on-primary cursor-pointer rounded-md p-1 text-white hover:bg-on-primary hover:text-primary"
                onClick={async () => {
                    onMessageSent(message);
                    setMessage("");
                }}
            >Send
            </button>
        </div>
    );
}

export default MessageInput;
