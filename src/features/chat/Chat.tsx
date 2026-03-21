import MessageInput from "./components/MessageInput";
import Message from "./components/Message";

import { useState } from "react";
import { useSendMessage } from "@/features/chat/hooks/useSendMessage.ts";

function Chat() {
    const [messages, setMessages] = useState<string[]>([]);
    const {sendMessage, isStreaming, error} = useSendMessage();

    const streamLlmResponse = async (message: string) => {
        setMessages(prevMessages => [...prevMessages, message, ""]);
        await sendMessage(message, (chunk: string) => {
            setMessages(prevMessages => prevMessages.map((msg, idx) => idx === prevMessages.length - 1 ? msg + chunk : msg));
        });
    }

    return (
        <section className="flex justify-center h-screen w-2/3 bg-red-100">
            <div className="flex flex-col gap-4 bg-blue-50 w-4/5 h-screen">
                {
                    messages.map((message, id) => <Message content={message} key={id}/>)
                }
            </div>
            <MessageInput onMessageSent={streamLlmResponse}/>
        </section>
    );
}

export default Chat;
