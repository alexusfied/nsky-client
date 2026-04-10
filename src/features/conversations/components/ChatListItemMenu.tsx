import {SquarePen, Trash} from "lucide-react";
import {useDeleteChat} from "../hooks/useDeleteChat.ts";
import {type Dispatch, type SetStateAction, useEffect, useRef, useState} from "react";
import useChatStore from "@/shared/store/chatStore.ts";
import PopupDialog from "@/shared/components/PopupDialog.tsx";
import useRenameChat from "../hooks/useRenameChat.ts";

interface IChatListItemMenuProps {
    chatId: number,
    setItemMenuIsVisible: Dispatch<SetStateAction<boolean>>,
    itemMenuIsVisible: boolean,
    chatName: string
}

function ChatListItemMenu({chatId, setItemMenuIsVisible, itemMenuIsVisible, chatName}: IChatListItemMenuProps ) {

    const {isLoading, error, deleteChat} = useDeleteChat();
    const removeChat = useChatStore((state) => state.removeChat);
    const setSelectedChat = useChatStore((state) => state.setSelectedChat);
    const selectedChatId = useChatStore((state) => state.selectedChat);
    const [showConfirmDeletePopup, setShowConfirmDeletePopup] = useState(false);
    const [showRenameChatPopup, setShowRenameChatPopup] = useState(false);
    const {newChatName, setNewChatName, renameChat} = useRenameChat(chatName);

    const menuRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (
                menuRef.current &&
                !menuRef.current.contains(event.target as Node)
            ) setItemMenuIsVisible(false);
        }

        if (itemMenuIsVisible && !(showConfirmDeletePopup || showRenameChatPopup)) document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        }
    }, [itemMenuIsVisible, showConfirmDeletePopup, showRenameChatPopup]);

    return(
        <>
            <div ref={menuRef} className={"flex flex-col items-start bg-primary-variant absolute top-10 right-0 z-10 p-3 gap-2 rounded-md"}>
                <button
                    className={"text-white cursor-pointer group"}
                    onClick={() => {
                        setShowRenameChatPopup(true);
                    }}
                >
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
            >
              <p>Do you really want to delete this chat?</p>
            </PopupDialog>}
            {showRenameChatPopup && <PopupDialog
                onConfirm={async () => {
                    await renameChat(chatId);
                    setItemMenuIsVisible(false);
                }}
                onCancel={() => {
                    setShowRenameChatPopup(false);
                    setItemMenuIsVisible(false);
                }}
            >
              <input type={"text"} value={newChatName} onInput={ (event) => {setNewChatName(event.currentTarget.value)}}/>
            </PopupDialog>}
        </>
    );
}

export default ChatListItemMenu;