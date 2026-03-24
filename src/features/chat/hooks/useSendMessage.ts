import {useState} from "react";
import {streamUserMessage} from "@/features/chat/services/messageApi.ts";
import useMessageStore from "../../../shared/store/messageStore.ts";
import useChatStore from "@/shared/store/chatStore.ts";

export function useSendMessage() {
    const [isStreaming, setIsStreaming] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const messages = useMessageStore((store) => store.messages);
    const addMessage = useMessageStore((store) => store.addMessage);
    const setMessages = useMessageStore((state) => state.setMessages);
    const streamMessage = useMessageStore((state) => state.streamMessage);
    const selectedChatId = useChatStore((store) => store.selectedChat);

    const sendMessage = async (content: string) => {
        setIsStreaming(true);
        setError(null);

        try {
            addMessage({role: "user", content: content})
            addMessage({role: "llm", content: ""});

            console.log(messages);

            if (selectedChatId === null) throw new Error("Chat id is null");

            await streamUserMessage(selectedChatId, content, (chunk) => {
                streamMessage(chunk);
            });
        } catch (err: any) {
            console.log(err.message);
            setError(err.message || "Streaming failed");
        } finally {
            setIsStreaming(false);
        }
    }

    return {
        sendMessage,
        isStreaming,
        error
    }
}