import {useEffect, useRef, useState} from "react";
import useMessageStore from "@/shared/store/messageStore.ts";

function useAutoScroll() {
    const [autoScroll, setAutoScroll] = useState(true);
    const chatRef = useRef<HTMLDivElement>(null);
    const messages = useMessageStore((store) => store.messages);

    useEffect(() => {
        const chatRefCurrent = chatRef.current;

        if (chatRefCurrent && autoScroll) {
            chatRefCurrent.scrollTop = chatRefCurrent.scrollHeight;
        }
    }, [messages]);

    return {chatRef}
}

export default useAutoScroll;