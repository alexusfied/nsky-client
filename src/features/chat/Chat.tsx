import MessageInput from "./components/MessageInput";
import Message from "./components/Message";

import { useSendMessage } from "@/features/chat/hooks/useSendMessage.ts";
import { useLoadMessagesForChat } from "./hooks/useLoadMessagesForChat.ts";

function Chat() {

    const {isLoadingMessages, errorLoadingMessages, messages} = useLoadMessagesForChat();
    const {sendMessage, isStreaming, error} = useSendMessage();

    return (
        <section className="flex justify-center h-screen w-full bg-primary-variant">
            <div className="flex flex-col gap-4 w-full pt-4 pb-40 pl-60 pr-60 overflow-y-auto">
                {
                    messages.map((message, id) => <Message content={message.content} type={message.role} key={id}/>)
                }
            </div>
            <MessageInput onMessageSent={sendMessage}/>
        </section>
    );
}

export default Chat;
