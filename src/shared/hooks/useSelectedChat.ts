import useChatStore from "@/shared/store/chatStore.ts";

export function useSelectedChat() {
    const selectedChat = useChatStore((state) => state.selectedChat);
    const updateSelectedChat = useChatStore((state) => state.setSelectedChat);
    const setSelectedChat = (id: number) => {
        updateSelectedChat(id);
    }

    return {selectedChat, setSelectedChat}
}