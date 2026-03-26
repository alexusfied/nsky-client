import MessageInput from "./components/MessageInput";
import Message from "./components/Message";

import { useSendMessage } from "@/features/chat/hooks/useSendMessage.ts";
import { useLoadMessagesForChat } from "./hooks/useLoadMessagesForChat.ts";

function Chat() {

    const {isLoadingMessages, errorLoadingMessages, messages} = useLoadMessagesForChat();
    const {sendMessage, isStreaming, error} = useSendMessage();

    return (
        <section className="flex justify-center h-screen w-full bg-primary-variant pl-60 pr-60 pt-4 pb-40 overflow-scroll">
            <div className="flex flex-col gap-4 h-screen w-full">
                {
                    messages.map((message, id) => <Message content={message.content} type={message.role} key={id}/>)
                }
            </div>
            <MessageInput onMessageSent={sendMessage}/>
        </section>
    );
}

export default Chat;
