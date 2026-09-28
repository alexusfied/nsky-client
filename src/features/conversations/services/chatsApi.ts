import {api} from "../../../shared/api/axiosInstance";
import {AxiosError} from "axios";

export async function deleteChat(chatId: number) {
    try {
        const response = await api.delete(`/chats/${chatId}/delete`);
    } catch (error) {
        const err = error as Error | AxiosError;
        throw new AxiosError(err.message);
    }
}

export async function deleteChats(chatIds: number[]) {
    try {
        const response = await api.delete("/chats/delete", {data: JSON.stringify({chatIds: chatIds})});
    } catch (error) {
        const err = error as Error | AxiosError;
        throw new AxiosError(err.message);
    }
}
