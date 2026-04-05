import {useState} from "react";
import {SquarePen, Trash} from "lucide-react";

function ChatListItemMenu() {

    return(
        <div className={"flex flex-col   items-start bg-primary-variant absolute top-10 right-0 z-10 p-3 gap-2 rounded-md"}>
            <button className={"text-white"}>
                <div className={"flex gap-4"}>
                    <p>Umbenennen</p>
                    <SquarePen />
                </div>
            </button>
            <button className={"text-white"}>
                <div className={"flex gap-4"}>
                    <p>Löschen</p>
                    <Trash />
                </div>
            </button>
        </div>
    );
}

export default ChatListItemMenu;