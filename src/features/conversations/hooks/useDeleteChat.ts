import {useState} from "react";
import {deleteChat as deleteChatApi, deleteChats as deleteChatsApi} from "../services/chatsApi";
import type {AxiosError} from "axios";
import useChatStore from "@/shared/store/chatStore";
import type { ApiError } from "@/shared/api/errors";
import { useAlert } from "@/shared/hooks/useAlert";
import { defaultMessages } from "@/shared/lib/errorMessage";

export function useDeleteChat() {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const removeChat = useChatStore((state) => state.removeChat);
    const removeChats = useChatStore((state) => state.removeChats);
    const setSelectedChat = useChatStore((state) => state.setSelectedChat);
    const selectedChat = useChatStore((state) => state.selectedChat);
    const { displayAlert } = useAlert();

    const deleteChat = async (chatId: number) => {
        setIsLoading(true);
        setError(null);

        try {
            await deleteChatApi(chatId);
            removeChat(chatId);

            displayAlert("success", "Chat deleted successfully");

            if (selectedChat === chatId) setSelectedChat(null);
        } catch (error) {
            const err = error as ApiError;
            displayAlert("error", defaultMessages[err.kind]);
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

            displayAlert("success", "Chats deleted successfully");

            if (selectedChat !== null && chatIds.includes(selectedChat)) setSelectedChat(null);
        } catch (error) {
            const err = error as ApiError;
            displayAlert("error", defaultMessages[err.kind]);
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    }

    return { isLoading, error, deleteChat, deleteChats }
}
