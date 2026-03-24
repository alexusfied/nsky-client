export async function streamUserMessage(chatId: number | null, content: string, onChunk: (chunk: string) => void) {
    const response = await fetch(`http://localhost:8192/api/llm/stream`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ chatId: chatId, prompt: content })
    });

    if (!response.body) throw new Error("No stream response received");

    const reader = response.body.getReader();
    const decoder = new TextDecoder("utf-8");

    let done = false;

    while(!done) {
        const result = await reader.read();
        done = result.done;

        if (result.value) {
            const chunk = decoder.decode(result.value, { stream: true });
            onChunk(chunk);
        }
    }
}