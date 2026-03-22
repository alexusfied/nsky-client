import type {IChat} from "@/shared/types/IChat.ts";
import ChatListItem from "./ChatListItem.tsx";
import useChatStore from "@/shared/store/chatStore.ts";

function ChatList({chats}: {chats: IChat[]}) {
    const selectedChatId = useChatStore((store) => store.selectedChat);

    return (
        <ul>
            {chats.map(chat => <ChatListItem content={chat.title} isSelected={chat.id === selectedChatId} id={chat.id}/>)}
        </ul>
    );
}

export default ChatList;