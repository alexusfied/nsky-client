import useChatStore from "@/shared/store/chatStore.ts";

export function useChatSelection() {
    const isChatSelectionMode = useChatStore((state) => state.isChatSelectionMode);
    const setIsChatSelectionMode = useChatStore((state) => state.setIsChatSelectionMode);
    const selectedChats = useChatStore((state) => state.selectedChats);
    const addSelectedChat = useChatStore((state) => state.addSelectedChat);
    const removeSelectedChat = useChatStore((state) => state.removeSelectedChat);
    const clearSelectedChats = useChatStore((state) => state.clearSelectedChats);


    return {
        isChatSelectionMode,
        setIsChatSelectionMode,
        selectedChats,
        addSelectedChat,
        removeSelectedChat,
        clearSelectedChats
    };
}

export default useChatSelection;
