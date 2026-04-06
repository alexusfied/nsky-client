import {SquarePen, Trash} from "lucide-react";
import {useDeleteChat} from "../hooks/useDeleteChat.ts";
import type {Dispatch, SetStateAction} from "react";
import useChatStore from "@/shared/store/chatStore.ts";

function ChatListItemMenu({chatId, setItemMenuIsVisible}: {chatId: number, setItemMenuIsVisible: Dispatch<SetStateAction<boolean>> }) {

    const {isLoading, error, deleteChat} = useDeleteChat();
    const removeChat = useChatStore((state) => state.removeChat);
    const setSelectedChat = useChatStore((state) => state.setSelectedChat);
    const selectedChatId = useChatStore((state) => state.selectedChat);

    return(
        <div className={"flex flex-col   items-start bg-primary-variant absolute top-10 right-0 z-10 p-3 gap-2 rounded-md"}>
            <button className={"text-white cursor-pointer group"}>
                <div className={"flex gap-4"}>
                    <p>Umbenennen</p>
                    <SquarePen className={"group-hover:text-on-primary"}/>
                </div>
            </button>
            <button
                className={"text-white cursor-pointer group"}
                onClick={() => {
                    deleteChat(chatId);
                    removeChat(chatId);

                    if (selectedChatId === chatId) setSelectedChat(null);

                    setItemMenuIsVisible(false);
            }}>
                <div className={"flex gap-4"}>
                    <p>Löschen</p>
                    <Trash className={"group-hover:text-on-primary"}/>
                </div>
            </button>
        </div>
    );
}

export default ChatListItemMenu;