import {useState} from "react";
import {streamUserMessage} from "@/features/chat/services/messageApi.ts";

export function useSendMessage() {
    const [isStreaming, setIsStreaming] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const sendMessage = async (content: string, updateResponse: (chunk: string) => void) => {
        setIsStreaming(true);
        setError(null);

        try {
            await streamUserMessage(content, (chunk) => {
                updateResponse(chunk);
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