import type {IChat} from "@/shared/types/IChat.ts";

interface IChatState {
    chats: IChat[],
    selectedChat: number | null,
    setSelectedChat: (id: number | null) => void,
    removeChat: (chat: number) => void,
    addChat: (chat: IChat) => void,
    setChats: (chats: IChat[]) => void,
    updateChatName: (id: number, newName: string) => void
}

export type { IChatState }