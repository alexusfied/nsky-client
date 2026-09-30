import { toApiError } from "@/shared/api/errors";
import {api} from "../../../shared/api/axiosInstance";
import {AxiosError, type AxiosResponse} from "axios";

export async function deleteChat(chatId: number): Promise<void> {
    try {
        await api.delete(`/chats/${chatId}/delete`);
    } catch (error) {
        const err = error as Error | AxiosError;
        throw toApiError(err);
    }
}

export async function deleteChats(chatIds: number[]): Promise<void> {
    try {
        await api.delete("/chats/delete", {data: JSON.stringify({chatIds: chatIds})});
    } catch (error) {
        const err = error as Error | AxiosError;
        throw toApiError(err)
    }
}

export async function loadAllChats(): Promise<AxiosResponse> {
    try {
        return await api.get("/chats/all"); 
    } catch (error) {
        const err = error as Error | AxiosError;
        throw toApiError(err);
    }
}
