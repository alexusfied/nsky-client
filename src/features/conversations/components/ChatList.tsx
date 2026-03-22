import type {IChat} from "@/shared/types/IChat.ts";

function ChatList({chats}: {chats: IChat[]}) {
    return (
        <ul>
            {chats.map(chat => <li className="text-white p-2 hover:border hover:rounded-md cursor-pointer">{chat.title}</li>)}
        </ul>
    );
}

export default ChatList;