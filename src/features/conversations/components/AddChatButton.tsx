import {CirclePlus} from "lucide-react";
import useChatStore from "@/shared/store/chatStore.ts";

function AddChatButton() {
    const setSelectedChat = useChatStore((store) => store.setSelectedChat);

    return (
        <button className="cursor-pointer text-on-primary hover:bg-on-primary hover:rounded-md hover:text-primary" onClick={() => {
            setSelectedChat(null);
        }}>
            <div className="flex gap-2 p-2">
                <CirclePlus />
                <p className="">Neuer Chat</p>
            </div>
        </button>
    );
}

export default AddChatButton;