import type {IChat} from "@/shared/types/IChat.ts";

import {useState} from "react";
import ChatList from "@/features/conversations/components/ChatList.tsx";
import {useLoadChats} from "@/features/conversations/hooks/useLoadChats.ts";
import useChatStore from "@/shared/store/chatStore.ts";
import ActionsBar from "@/features/conversations/components/ActionsBar.tsx";

function Conversations() {
    const {isLoading, error} = useLoadChats();
    const chats = useChatStore((state) => state.chats);

    const [testChats, setTestChats] = useState<IChat[]>([
        {id: 1, title: "Why is the sky blue?"},
        {id: 2, title: "How is the weather today?"},
        {id: 3, title: "What is the answer to everything?"}
    ]);

    return (
        <section className="flex flex-col bg-primary h-screen w-1/4 p-4 gap-8">
            <ActionsBar />
            <ChatList chats={chats} />
        </section>
    );
}

export default Conversations;
