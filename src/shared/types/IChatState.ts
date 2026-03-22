import type {IChat} from "@/shared/types/IChat.ts";

interface IChatState {
    chats: IChat[],
    addChat: (chat: IChat) => void,
    setChats: (chats: IChat[]) => void
}

export type { IChatState }