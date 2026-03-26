import useChatStore from "@/shared/store/chatStore.ts";

function ChatListItem({content, isSelected, id}: {content: string, isSelected: boolean, id: number}) {
    const setSelectedChat = useChatStore((store) => store.setSelectedChat);

    return (
        <li>
            <button
                className={`text-white p-2 w-full hover:bg-primary-variant hover:rounded-md cursor-pointer ${isSelected ? "bg-primary-variant" : ""}`}
                onClick={() => {
                    setSelectedChat(id);
                }}
            >
                {content}
            </button>
        </li>
    );
}

export default ChatListItem;