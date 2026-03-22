import { create } from "zustand";
import type {IChatState} from "@/shared/types/IChatState.ts";
import type {IChat} from "@/shared/types/IChat.ts";

const useChatStore = create<IChatState>((set) => ({
    chats: [],
    selectedChat: null,
    addChat: (chat) => set((state) => ({ chats: [...state.chats, chat] })),
    setChats: (chats: IChat[]) => set((state) => ({ chats: chats }))
}));

export default useChatStore;