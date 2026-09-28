import type {IChat} from "@/shared/types/IChat.ts";

interface IChatState {
    chats: IChat[],
    selectedChats: number[],
    addSelectedChat: (chatId: number) => void,
    removeSelectedChat: (chatId: number) => void,
    clearSelectedChats: () => void,
    isChatSelectionMode: boolean,
    setIsChatSelectionMode: (value: boolean) => void,
    selectedChat: number | null,
    setSelectedChat: (id: number | null) => void,
    removeChat: (chat: number) => void,
    removeChats: (chats: number[]) => void,
    addChat: (chat: IChat) => void,
    setChats: (chats: IChat[]) => void,
    updateChatName: (id: number, newName: string) => void
}

export type { IChatState }
