import type {IChat} from "@/shared/types/IChat.ts";
import {api} from "@/shared/api/axiosInstance.ts";

import {useEffect, useState} from "react";
import type {AxiosError} from "axios";

export function useLoadChats() {
    const [chats, setChats] = useState<IChat[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const loadChats = async () => {
        setIsLoading(true);
        setError(null);

        try {
            const response = await api.get("/chats/all")
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
        chats,
        isLoading,
        error
    }
}