import {useState} from "react";
import useChatStore from "@/shared/store/chatStore.ts";

export function useChatSelection() {
    const isChatSelectionMode = useChatStore((state) => state.isChatSelectionMode);
    const setIsChatSelectionMode = useChatStore((state) => state.setIsChatSelectionMode);

    return {
        isChatSelectionMode,
        setIsChatSelectionMode
    };
}

export default useChatSelection;
