import { create } from "zustand";
import type {IChatState} from "@/shared/types/IChatState.ts";
import type {IChat} from "@/shared/types/IChat.ts";

const useChatStore = create<IChatState>((set) => ({
    chats: [],
    selectedChats: [],
    addSelectedChat: (chatId) => set((state) => ({ selectedChats: [...state.selectedChats, chatId] })),
    removeSelectedChat: (chatId) => set((state) => ({ selectedChats: state.selectedChats.filter((selectedChatId) => selectedChatId !== chatId) })),
    clearSelectedChats: () => set(() => ({ selectedChats: [] })),
    selectedChat: null,
    isChatSelectionMode: false,
    setIsChatSelectionMode: (value: boolean) => set(() => ({ isChatSelectionMode: value })),
    setSelectedChat: (id: number | null) => set(() => ({ selectedChat: id })),
    addChat: (chat) => set((state) => ({ chats: [...state.chats, chat] })),
    removeChat: (removedChat: number) => set((state) => ({ chats: state.chats.filter((chat) => chat.id !== removedChat) })),
    setChats: (chats: IChat[]) => set(() => ({ chats: chats })),
    updateChatName: (id: number, newName: string) => set((state) => ({ chats: state.chats.map((chat) => {
        if (chat.id === id) {
            chat.title = newName;
            return chat;
        }
        return chat;
    }) }))
}));

export default useChatStore;
