import { create } from "zustand";
import type {IChatState} from "@/shared/types/IChatState.ts";
import type {IChat} from "@/shared/types/IChat.ts";

const useChatStore = create<IChatState>((set) => ({
    chats: [],
    selectedChat: null,
    setSelectedChat: (id: number | null) => set((state) => ({ selectedChat: id })),
    addChat: (chat) => set((state) => ({ chats: [...state.chats, chat] })),
    removeChat: (removedChat: number) => set((state) => ({ chats: state.chats.filter((chat) => chat.id !== removedChat) })),
    setChats: (chats: IChat[]) => set((state) => ({ chats: chats })),
    updateChatName: (id: number, newName: string) => set((state) => ({ chats: state.chats.map((chat) => {
            if (chat.id === id) {
                chat.title = newName;
                return chat;
            }
            return chat;
        }) }))
}));

export default useChatStore;