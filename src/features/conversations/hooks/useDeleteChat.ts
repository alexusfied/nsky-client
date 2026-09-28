import {useState} from "react";
import {deleteChat as deleteChatApi, deleteChats as deleteChatsApi} from "../services/chatsApi";
import type {AxiosError} from "axios";
import useChatStore from "@/shared/store/chatStore";

export function useDeleteChat() {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const removeChat = useChatStore((state) => state.removeChat);
    const removeChats = useChatStore((state) => state.removeChats);

    const deleteChat = async (chatId: number) => {
        setIsLoading(true);
        setError(null);

        try {
            await deleteChatApi(chatId);
            removeChat(chatId);
        } catch (error) {
            const err = error as Error | AxiosError;
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    }

    const deleteChats = async (chatIds: number[]) => {
        setIsLoading(true);
        setError(null);

        try {
            await deleteChatsApi(chatIds);
            removeChats(chatIds);
        } catch (error) {
            const err = error as Error | AxiosError;
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    }

    return { isLoading, error, deleteChat, deleteChats }
}
