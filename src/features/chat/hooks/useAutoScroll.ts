import {useEffect, useRef, useState} from "react";
import useMessageStore from "@/shared/store/messageStore.ts";

function useAutoScroll() {
    const chatRef = useRef<HTMLDivElement>(null);
    const messages = useMessageStore((store) => store.messages);

    useEffect(() => {
        const chatRefCurrent = chatRef.current;

        if (!(Math.abs(chatRefCurrent.scrollHeight - chatRefCurrent.clientHeight - chatRefCurrent.scrollTop) <= 300)) {
            return;
        }
        if (chatRefCurrent) {
            chatRefCurrent.scrollTo({
                top: chatRefCurrent.scrollHeight,
                behavior: "smooth"
            }); 
        }
    }, [messages]);

    return {chatRef}
}

export default useAutoScroll;
