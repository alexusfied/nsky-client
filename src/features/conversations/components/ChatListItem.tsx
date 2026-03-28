import useChatStore from "@/shared/store/chatStore.ts";

function ChatListItem({content, isSelected, id}: {content: string, isSelected: boolean, id: number}) {
    const setSelectedChat = useChatStore((store) => store.setSelectedChat);

    return (
        <li>
            <div className={`flex justify-start w-full hover:bg-primary-variant hover:rounded-md cursor-pointer ${isSelected ? "bg-primary-variant" : ""}`}>
                <button
                    className={`text-white p-2 cursor-pointer`}
                    onClick={() => {
                        setSelectedChat(id);
                    }}
                >
                    {content}
                </button>
            </div>
        </li>
    );
}

export default ChatListItem;