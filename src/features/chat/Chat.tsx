import MessageInput from "./components/MessageInput";
import Message from "./components/Message";

import { useState } from "react";
import { useSendMessage } from "@/features/chat/hooks/useSendMessage.ts";
import type {IMessage} from "@/shared/types/IMessage.ts";

function Chat() {
    const testMessages: IMessage[] = [
        {role: "user", content: "Hello"},
        {role: "llm", content: "Hello, how are you today?"},
        {role: "user", content: "Why is the sky blue?"},
        {role: "llm", content: "Here comes a lengthy explanation why the sky is blue"}
    ];

    const [messages, setMessages] = useState<IMessage[]>(testMessages);
    const {sendMessage, isStreaming, error} = useSendMessage();

    const streamLlmResponse = async (message: string) => {
        setMessages(prevMessages => [
            ...prevMessages,
            {role: "user", content: message},
            {role: "llm", content: ""}
        ]);
        await sendMessage(message, (chunk: string) => {
            setMessages(prevMessages =>
                prevMessages.map((msg, idx) =>
                    idx === prevMessages.length - 1 ? {role: msg.role, content: msg.content + chunk} : msg
                )
            );
        });
    }

    return (
        <section className="flex justify-center h-screen w-2/3">
            <div className="flex flex-col gap-4 w-4/5 h-screen">
                {
                    messages.map((message, id) => <Message content={message.content} type={message.role} key={id}/>)
                }
            </div>
            <MessageInput onMessageSent={streamLlmResponse}/>
        </section>
    );
}

export default Chat;
