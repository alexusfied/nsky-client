import useChatStore from "../../../shared/store/chatStore";

export function useChats() {
    const allChats = useChatStore((state) => state.chats);

    const getNumChats = () => {
        return allChats.length;
    };

    return {
        allChats,
        getNumChats
    };
}
