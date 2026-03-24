import {useState} from "react";
import {streamUserMessage} from "@/features/chat/services/messageApi.ts";
import useMessageStore from "../../../shared/store/messageStore.ts";
import useChatStore from "@/shared/store/chatStore.ts";

export function useSendMessage() {
    const [isStreaming, setIsStreaming] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const messages = useMessageStore((store) => store.messages);
    const addMessages = useMessageStore((store) => store.addMessages);
    const setMessages = useMessageStore((state) => state.setMessages);
    const selectedChatId = useChatStore((store) => store.selectedChat);

    const sendMessage = async (content: string) => {
        setIsStreaming(true);
        setError(null);

        try {
            addMessages([
                {role: "user", content: content},
                {role: "llm", content: ""}
            ]);

            if (selectedChatId === null) throw new Error("Chat id is null");

            await streamUserMessage(selectedChatId, content, (chunk) => {
                setMessages(
                    messages.map((msg, idx) =>
                        idx === messages.length ? {role: msg.role, content: msg.content + chunk} : msg
                    )
                );
            });
        } catch (err: any) {
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