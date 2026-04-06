import {useState} from "react";
import {api} from "@/shared/api/axiosInstance.ts";
import type {AxiosError} from "axios";

export function useDeleteChat() {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const deleteChat = async (chatId: number) => {
        setIsLoading(true);
        setError(null);

        try {
            const response = await api.delete(`/chats/${chatId}/delete`);
        } catch (error) {
            const err = error as Error | AxiosError;
            setError(err.message);
        }
    }

    return { isLoading, error, deleteChat }
}