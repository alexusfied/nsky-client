import type {IMessage} from "@/shared/types/IMessage.ts";

interface IMessagesState {
    messages: IMessage[],
    addMessage: (message: IMessage) => void,
    setMessages: (messages: IMessage[]) => void
}

export type { IMessagesState }