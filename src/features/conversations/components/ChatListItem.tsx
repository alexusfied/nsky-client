import useChatStore from "@/shared/store/chatStore.ts";
import {EllipsisVertical} from "lucide-react";
import {useState} from "react";
import ChatListItemMenu from "./ChatListItemMenu.tsx";

function ChatListItem({content, isSelected, id}: {content: string, isSelected: boolean, id: number}) {
    const setSelectedChat = useChatStore((store) => store.setSelectedChat);
    const [itemMenuIsVisible, setItemMenuIsVisible] = useState(true);

    return (
        <div className={"relative"}>
            <li>
                <div className={`group flex w-full hover:bg-primary-variant hover:rounded-md cursor-pointer ${isSelected ? "bg-primary-variant" : ""}`}>
                    <button
                        className={`text-white p-2 cursor-pointer truncate w-full flex justify-start`}
                        onClick={() => {
                            setSelectedChat(id);
                        }}
                    >
                        {content}
                    </button>
                    <button
                        className="cursor-pointer hover:bg-on-primary hover:rounded-4xl opacity-0 group-hover:opacity-100 transition-bg duration-300"
                        onClick={() => {
                            setItemMenuIsVisible((prevState) => !prevState);
                        }}
                    >
                        <EllipsisVertical color={"#fcfcfc"}/>
                    </button>
                </div>
            </li>
            {itemMenuIsVisible && <ChatListItemMenu />}
        </div>
    );
}

export default ChatListItem;