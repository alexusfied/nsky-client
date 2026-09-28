import {useState} from "react";
import {deleteChat as deleteChatApi, deleteChats as deleteChatsApi} from "../services/chatsApi";
import type {AxiosError} from "axios";

export function useDeleteChat() {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const deleteChat = async (chatId: number) => {
        setIsLoading(true);
        setError(null);

        try {
            await deleteChatApi(chatId); 
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
        } catch (error) {
            const err = error as Error | AxiosError;
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    }

    return { isLoading, error, deleteChat, deleteChats }
}
