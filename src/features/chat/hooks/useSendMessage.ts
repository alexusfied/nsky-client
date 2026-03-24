import {useState} from "react";
import {streamUserMessage} from "@/features/chat/services/messageApi.ts";
import useMessageStore from "../../../shared/store/messageStore.ts";

export function useSendMessage() {
    const [isStreaming, setIsStreaming] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const messages = useMessageStore((store) => store.messages);
    const setMessages = useMessageStore((state) => state.setMessages);

    const sendMessage = async (content: string) => {
        setIsStreaming(true);
        setError(null);

        try {
            setMessages([
                ...messages,
                {role: "user", content: content},
                {role: "llm", content: ""}
            ]);
            await streamUserMessage(content, (chunk) => {
                setMessages(
                    messages.map((msg, idx) =>
                        idx === messages.length - 1 ? {role: msg.role, content: msg.content + chunk} : msg
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