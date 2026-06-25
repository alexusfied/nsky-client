import { fetchEventSource } from "@microsoft/fetch-event-source";
import type {IStreamResponseEvent} from "@/shared/types/IStreamResponseEvent.ts";

export async function streamUserMessage(
    chatId: number | null,
    content: string,
    provider: string,
    onChunk: (chunk: IStreamResponseEvent) => void
) {
    const ctrl = new AbortController();

    await fetchEventSource(`http://localhost:8192/api/llm/stream`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ chatId: chatId, prompt: content, provider: provider }),
        onerror(err) {
            throw new Error("Error in message streaming: " + err);
        },
        onmessage(eventMsg) {
            const event: IStreamResponseEvent = {
                event: eventMsg.event,
                data: eventMsg.data
            }

            onChunk(event);
        }
    });
}