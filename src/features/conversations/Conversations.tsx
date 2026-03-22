import type {IChat} from "@/shared/types/IChat.ts";

import {useState} from "react";
import ChatList from "@/features/conversations/components/ChatList.tsx";

function Conversations() {
    const [chats, setChats] = useState<IChat[]>([
        {id: 1, title: "Why is the sky blue?"},
        {id: 2, title: "How is the weather today?"},
        {id: 3, title: "What is the answer to everything?"}
    ]);

    return (
        <section className="flex bg-black h-screen w-1/4">
            <ChatList chats={chats} />
        </section>
    );
}

export default Conversations;
