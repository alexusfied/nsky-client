import type {IChat} from "@/shared/types/IChat.ts";

function ChatList({chats}: {chats: IChat[]}) {
    return (
        <ul>
            {chats.map(chat => <li className="text-white">{chat.title}</li>)}
        </ul>
    );
}

export default ChatList;