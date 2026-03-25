import {useState} from "react";
import {streamUserMessage} from "@/features/chat/services/messageApi.ts";
import useMessageStore from "../../../shared/store/messageStore.ts";
import useChatStore from "@/shared/store/chatStore.ts";

export function useSendMessage() {
    const [isStreaming, setIsStreaming] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const addChat = useChatStore((state) => state.addChat);
    const addMessages = useMessageStore((store) => store.addMessages);
    const streamMessage = useMessageStore((state) => state.streamMessage);
    const setSelectedChat = useChatStore((store) => store.setSelectedChat);
    const selectedChatId = useChatStore((store) => store.selectedChat);

    const parseAddedChatId = (chunk: string) => {
        const chatId = chunk.split(" ")[1];

        if (chatId === undefined) throw new Error("Chat id could not be parsed");

        return Number(chatId);
    }

    const sendMessage = async (content: string) => {
        setIsStreaming(true);
        setError(null);

        try {
            addMessages([{role: "user", content: content}, {role: "llm", content: ""}]);

            await streamUserMessage(selectedChatId, content, (chunk) => {
                if (chunk.startsWith("chatId")) {
                    if (selectedChatId === null) {
                        const addedChatId = parseAddedChatId(chunk);
                        addChat({id: addedChatId, title: content});
                        setSelectedChat(addedChatId);
                    }
                    return;
                }
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