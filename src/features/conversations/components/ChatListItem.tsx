import useChatStore from "@/shared/store/chatStore.ts";

function ChatListItem({content, isSelected, id}: {content: string, isSelected: boolean, id: number}) {
    const setSelectedChat = useChatStore((store) => store.setSelectedChat);

    return (
        <li>
            <button
                className={`text-white p-2 hover:border hover:rounded-md cursor-pointer ${isSelected ? "border rounded-md" : ""}`}
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