import useChatStore from "@/shared/store/chatStore.ts";
import {EllipsisVertical} from "lucide-react";
import {useState} from "react";
import ChatListItemMenu from "./ChatListItemMenu.tsx";
import useChatSelection from "../hooks/useChatSelection.ts";
import Checkbox from "@mui/material/Checkbox";

function ChatListItem({content, isSelected, id}: {content: string, isSelected: boolean, id: number}) {
    const setSelectedChat = useChatStore((store) => store.setSelectedChat);
    const [itemMenuIsVisible, setItemMenuIsVisible] = useState(false);
    const {isChatSelectionMode} = useChatSelection();

    return (
        <div className={"relative flex"}>
            {isChatSelectionMode && <Checkbox />}
            <li>
                <div className={`group flex gap-4 w-14/15 hover:bg-primary-variant hover:rounded-md cursor-pointer ${isSelected ? "bg-primary-variant" : ""}`}>
                    <button
                        className={`text-white p-2 cursor-pointer truncate w-full flex justify-start`}
                        onClick={() => {
                            setSelectedChat(id);
                        }}
                    >
                        {content}
                    </button>
                    { !isChatSelectionMode &&
                    <button
                        className="cursor-pointer hover:bg-on-primary hover:rounded-4xl opacity-0 group-hover:opacity-100 transition-bg duration-300"
                        onClick={() => {
                            setItemMenuIsVisible(!itemMenuIsVisible);
                        }}
                    >
                        <EllipsisVertical color={"#fcfcfc"}/>
                    </button>
                    }
                </div>
            </li>
            {itemMenuIsVisible && <ChatListItemMenu
                chatId={id}
                setItemMenuIsVisible={setItemMenuIsVisible}
                itemMenuIsVisible={itemMenuIsVisible}
                chatName={content}
            />}
        </div>
    );
}

export default ChatListItem;
