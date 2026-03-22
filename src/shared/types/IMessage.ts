interface IMessage {
    role: "user" | "llm",
    content: string
}

export type { IMessage };