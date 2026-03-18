import MessageInput from "./components/MessageInput";
import Message from "./components/Message";

import { useState } from "react";

function Chat() {
    const [messages, setMessages] = useState<string[]>([]);

    const addMessage = (message: string) => {
        setMessages([...messages, message]);
    }

    return (
        <section className="flex justify-center h-screen w-2/3 bg-red-100">
            <div className="flex flex-col gap-4 bg-blue-50 w-4/5 h-screen">
                {
                    messages.map(message => <Message content={message} />)
                }
            </div>
            <MessageInput onMessageSent={addMessage}/>
        </section>
    );
}

export default Chat;
