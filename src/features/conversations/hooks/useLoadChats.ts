import {useEffect, useState} from "react";
import useChatStore from "@/shared/store/chatStore.ts";
import type { ApiError } from "@/shared/api/errors";
import { useAlert } from "@/shared/hooks/useAlert";
import { defaultMessages } from "@/shared/lib/errorMessage";
import { loadAllChats } from "../services/chatsApi";

export function useLoadChats() {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const setChats = useChatStore((state) => state.setChats);
    const { displayAlert } = useAlert();

    const loadChats = async () => {
        setIsLoading(true);
        setError(null);

        try {
            const response = await loadAllChats();
            setChats(response.data);
        } catch (error) {
            const err = error as ApiError;
            displayAlert("error", defaultMessages[err.kind]);
            setError(err.message);
        } finally {
            setIsLoading(false);
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
