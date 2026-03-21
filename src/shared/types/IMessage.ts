interface IMessage {
    id: string,
    role: "user" | "llm",
    content: string
}

export type { IMessage };