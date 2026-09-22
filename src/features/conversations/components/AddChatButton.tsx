import {CirclePlus} from "lucide-react";
import useChatStore from "@/shared/store/chatStore.ts";

function AddChatButton() {
    const setSelectedChat = useChatStore((store) => store.setSelectedChat);

    return (
        <button className="cursor-pointer text-on-primary hover:bg-on-primary hover:rounded-md hover:text-primary p-2" onClick={() => {
            setSelectedChat(null);
        }}>
            <CirclePlus />
        </button>
    );
}

export default AddChatButton;
