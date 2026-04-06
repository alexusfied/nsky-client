import type {IChat} from "@/shared/types/IChat.ts";

interface IChatState {
    chats: IChat[],
    selectedChat: number | null,
    setSelectedChat: (id: number | null) => void,
    removeChat: (chat: number) => void,
    addChat: (chat: IChat) => void,
    setChats: (chats: IChat[]) => void
}

export type { IChatState }