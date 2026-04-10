import {SquarePen, Trash} from "lucide-react";
import {useDeleteChat} from "../hooks/useDeleteChat.ts";
import {type Dispatch, type SetStateAction, useEffect, useRef, useState} from "react";
import useChatStore from "@/shared/store/chatStore.ts";
import PopupDialog from "@/shared/components/PopupDialog.tsx";

function ChatListItemMenu({chatId, setItemMenuIsVisible, itemMenuIsVisible}: {chatId: number, setItemMenuIsVisible: Dispatch<SetStateAction<boolean>>, itemMenuIsVisible: boolean }) {

    const {isLoading, error, deleteChat} = useDeleteChat();
    const removeChat = useChatStore((state) => state.removeChat);
    const setSelectedChat = useChatStore((state) => state.setSelectedChat);
    const selectedChatId = useChatStore((state) => state.selectedChat);
    const [showConfirmDeletePopup, setShowConfirmDeletePopup] = useState(false);

    const menuRef = useRef<HTMLDivElement | null>(null);
    const popupRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (
                menuRef.current &&
                !menuRef.current.contains(event.target as Node) &&
                popupRef.current &&
                !popupRef.current.contains(event.target as Node)) setItemMenuIsVisible(false)
        }

        if (itemMenuIsVisible) document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        }
    }, [itemMenuIsVisible]);

    return(
        <>
            <div ref={menuRef} className={"flex flex-col   items-start bg-primary-variant absolute top-10 right-0 z-10 p-3 gap-2 rounded-md"}>
                <button className={"text-white cursor-pointer group"}>
                    <div className={"flex gap-4"}>
                        <p>Rename</p>
                        <SquarePen className={"group-hover:text-on-primary"}/>
                    </div>
                </button>
                <button
                    className={"text-white cursor-pointer group"}
                    onClick={() => {
                        setShowConfirmDeletePopup(true);
                    }}>
                    <div className={"flex gap-4"}>
                        <p>Delete</p>
                        <Trash className={"group-hover:text-on-primary"}/>
                    </div>
                </button>
            </div>
            {showConfirmDeletePopup && <PopupDialog
              onConfirm={async () => {
                  await deleteChat(chatId);
                  removeChat(chatId);

                  if (selectedChatId === chatId) setSelectedChat(null);

                  setShowConfirmDeletePopup(false);
                  setItemMenuIsVisible(false);
              }}
              onCancel={() => {
                  setShowConfirmDeletePopup(false);
                  setItemMenuIsVisible(false);
              }}
              ref={popupRef}
              text={"Do you really want to delete this chat?"}
            />}
        </>
    );
}

export default ChatListItemMenu;