import useChatStore from "@/shared/store/chatStore.ts";
import {EllipsisVertical} from "lucide-react";

function ChatListItem({content, isSelected, id}: {content: string, isSelected: boolean, id: number}) {
    const setSelectedChat = useChatStore((store) => store.setSelectedChat);

    return (
        <li>
            <div className={`group flex justify-between w-full hover:bg-primary-variant hover:rounded-md cursor-pointer ${isSelected ? "bg-primary-variant" : ""}`}>
                <button
                    className={`text-white p-2 cursor-pointer`}
                    onClick={() => {
                        setSelectedChat(id);
                    }}
                >
                    {content}
                </button>
                <button className="cursor-pointer hover:bg-on-primary hover:rounded-4xl opacity-0 group-hover:opacity-100 transition-bg duration-300">
                    <EllipsisVertical color={"#fcfcfc"}/>
                </button>
            </div>
        </li>
    );
}

export default ChatListItem;