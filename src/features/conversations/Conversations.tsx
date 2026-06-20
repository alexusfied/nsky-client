import {useState} from "react";
import ChatList from "@/features/conversations/components/ChatList.tsx";
import {useLoadChats} from "@/features/conversations/hooks/useLoadChats.ts";
import useChatStore from "@/shared/store/chatStore.ts";
import ActionsBar from "@/features/conversations/components/ActionsBar.tsx";
import ToggleSidebarButton from "./components/ToggleSidebarButton.tsx";
import BottomBar from "@/features/conversations/components/BottomBar.tsx";


function Conversations() {
    const {isLoading, error} = useLoadChats();
    const chats = useChatStore((state) => state.chats);

    const [isHidden, setIsHidden] = useState(false);

    return (
        <>
            <section className={`flex flex-col justify-between bg-primary h-screen w-1/4 p-4 transition ${isHidden ? "-translate-x-full absolute" : ""}`}>
                <div className={`flex flex-col gap-8`}>
                    <div className={`flex w-full justify-between`}>
                        <ActionsBar />
                        <ToggleSidebarButton onHide={() => {setIsHidden(!isHidden)}}/>
                    </div>
                    <ChatList chats={chats} />
                </div>
                <BottomBar />
            </section>
            { isHidden &&
                <section className={`flex flex-col bg-primary h-screen p-4`}>
                    <ToggleSidebarButton onHide={() => {setIsHidden(!isHidden)}} />
                </section>
            }
        </>
    );
}

export default Conversations;
