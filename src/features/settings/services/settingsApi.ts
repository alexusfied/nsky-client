import {api} from "../../../shared/api/axiosInstance";
import {AxiosError, type AxiosResponse} from "axios";
import { toApiError } from "@/shared/api/errors";

export async function loadUserSettings(): Promise<AxiosResponse> {
    try {
        return await api.get("/settings");
    } catch (error) {
        const err = error as Error | AxiosError;
        throw toApiError(err);
    }
}

export async function saveUserSetting(provider: string | null, theme: string | null, think: boolean | null) {
    try {
        const response = await api.post("/settings/save", {data: JSON.stringify({ provider: provider, theme: theme, think: think })});
    } catch (error) {
       const err = error as Error | AxiosError;
       throw toApiError(err);
    }
}
