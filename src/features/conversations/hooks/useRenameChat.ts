import {useState} from "react";
import {api} from "@/shared/api/axiosInstance.ts";
import type {AxiosError} from "axios";

export default function useRenameChat(chatName: string) {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [newChatName, setNewChatName] = useState(chatName);
    const renameChat = async (chatId: number) => {
        setIsLoading(true);

        try {
            const response = await api.patch(`/chats/${chatId}/rename`, {
                updatedName: newChatName
            });
            setIsLoading(false);
        } catch (error) {
            const err = error as Error | AxiosError;
            setError(err.message);
            setIsLoading(false);
        }
    };

    return {newChatName, setNewChatName, renameChat, isLoading, error}
}