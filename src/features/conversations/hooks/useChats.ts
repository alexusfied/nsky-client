import useChatStore from "../../../shared/store/chatStore";

export function useChats() {
    const allChats = useChatStore((state) => state.chats);

    return {
        allChats
    };
}
