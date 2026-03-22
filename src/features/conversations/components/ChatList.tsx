import type {IChat} from "@/shared/types/IChat.ts";

function ChatList({chats}: {chats: IChat[]}) {
    return (
        <ul>
            {chats.map(chat => <li className="text-white pb-2">{chat.title}</li>)}
        </ul>
    );
}

export default ChatList;