import MessageInput from "./components/MessageInput";
import Message from "./components/Message";

import { useSendMessage } from "@/features/chat/hooks/useSendMessage.ts";
import { useLoadMessagesForChat } from "./hooks/useLoadMessagesForChat.ts";

function Chat() {

    const {isLoadingMessages, errorLoadingMessages, setMessages, messages} = useLoadMessagesForChat();
    const {sendMessage, isStreaming, error} = useSendMessage();

    return (
        <section className="flex justify-center h-screen w-2/3">
            <div className="flex flex-col gap-4 w-4/5 h-screen">
                {
                    messages.map((message, id) => <Message content={message.content} type={message.role} key={id}/>)
                }
            </div>
            <MessageInput onMessageSent={sendMessage}/>
        </section>
    );
}

export default Chat;
