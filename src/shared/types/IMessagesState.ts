import type {IMessage} from "@/shared/types/IMessage.ts";

interface IMessagesState {
    messages: IMessage[],
    addMessages: (messages: IMessage[]) => void,
    setMessages: (messages: IMessage[]) => void,
    streamMessage: (chunk: string) => void
}

export type { IMessagesState }