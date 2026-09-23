import {api} from "@/shared/api/axiosInstance.ts";
import {useEffect, useState} from "react";
import type {AxiosError} from "axios";
import useSettingsStore from "@/shared/store/settingsStore.ts";

export function useLoadSettings() {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const setSelectedProvider = useSettingsStore((state) => state.setSelectedProvider);
    const setSelectedTheme = useSettingsStore((state) => state.setSelectedTheme);
    const setThink = useSettingsStore((state) => state.setThink);


    const loadSettings = async () => {
        setIsLoading(true);
        setError(null);

        try {
            const response = await api.get("/settings");

            setSelectedProvider(response.data.provider);
            setSelectedTheme(response.data.theme);
            setThink(response.data.think);
        } catch (error) {
            const err = error as AxiosError | Error; 
            setError(err.message);
        }
    }

    useEffect(() => {
        loadSettings();
    }, []);

    return {
        isLoading,
        error
    }
}
