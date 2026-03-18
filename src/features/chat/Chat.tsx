import MessageInput from "./components/MessageInput";
import Message from "./components/Message";

import { useState } from "react";
import { useSendMessage } from "@/features/chat/hooks/useSendMessage.ts";

function Chat() {
    const [messages, setMessages] = useState<string[]>([]);
    const {sendMessage, isStreaming, error} = useSendMessage();
    const [currentResponse, setCurrentResponse] = useState("");

    const streamLlmResponse = (message: string) => {
        setMessages(prevMessages => [...prevMessages, message]);
        sendMessage(message, (chunk: string) => {
            setCurrentResponse(prevPartialResponse => prevPartialResponse + chunk);
        });
        setMessages(prevMessages => [...prevMessages, currentResponse]);
        setCurrentResponse("");
    }

    return (
        <section className="flex justify-center h-screen w-2/3 bg-red-100">
            <div className="flex flex-col gap-4 bg-blue-50 w-4/5 h-screen">
                {
                    messages.map((message, id) => <Message content={message} key={id}/>)
                }
                <Message content={currentResponse}></Message>
            </div>
            <MessageInput onMessageSent={streamLlmResponse}/>
        </section>
    );
}

export default Chat;
