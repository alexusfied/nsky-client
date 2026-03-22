import type {IChat} from "@/shared/types/IChat.ts";
import {api} from "@/shared/api/axiosInstance.ts";

import {useEffect, useState} from "react";
import type {AxiosError} from "axios";
import useChatStore from "@/shared/store/chatStore.ts";

export function useLoadChats() {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const setChats = useChatStore((state) => state.setChats);

    const loadChats = async () => {
        setIsLoading(true);
        setError(null);

        try {
            const response = await api.get("/chats/all");
            setChats(response.data);
        } catch (error) {
            const err = error as Error | AxiosError;
            setError(err.message);
        }
    }

    useEffect(() => {
        loadChats()
    }, []);

    return {
        isLoading,
        error
    }
}