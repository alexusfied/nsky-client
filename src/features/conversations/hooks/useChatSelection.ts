import useChatStore from "@/shared/store/chatStore.ts";

export function useChatSelection() {
    const isChatSelectionMode = useChatStore((state) => state.isChatSelectionMode);
    const setIsChatSelectionMode = useChatStore((state) => state.setIsChatSelectionMode);
    const selectedChats = useChatStore((state) => state.selectedChats);
    const addSelectedChat = useChatStore((state) => state.addSelectedChat);
    const removeSelectedChat = useChatStore((state) => state.removeSelectedChat);


    return {
        isChatSelectionMode,
        setIsChatSelectionMode,
        selectedChats,
        addSelectedChat,
        removeSelectedChat
    };
}

export default useChatSelection;
