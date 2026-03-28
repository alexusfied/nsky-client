import {CirclePlus} from "lucide-react";
import useChatStore from "@/shared/store/chatStore.ts";

function AddChatButton() {
    const setSelectedChat = useChatStore((store) => store.setSelectedChat);

    return (
        <div className="flex gap-2">
            <button className="cursor-pointer text-on-primary" onClick={() => {
                setSelectedChat(null);
            }}>
                <CirclePlus />
            </button>
        </div>
    );
}

export default AddChatButton;