import {api} from "@/shared/api/axiosInstance.ts";
import useChatStore from "@/shared/store/chatStore.ts";
import type {AxiosError} from "axios";
import {useState} from "react";

export function useCreateChat() {
    const addChat = useChatStore((state) => state.addChat);
    const [error, setError] = useState<string | null>(null);

    const createChat = async (title: string) => {
        try {
            const response = await api.post("/chats/create", {
                name: title
            });
            addChat({id: response.data.id, title: title});
        } catch (error) {
            const err = error as Error | AxiosError;
            setError(err.message);
        }
    }

    return createChat;
}