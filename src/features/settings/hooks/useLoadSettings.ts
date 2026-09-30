import {api} from "@/shared/api/axiosInstance.ts";
import {useEffect, useState} from "react";
import type {AxiosError} from "axios";
import useSettingsStore from "@/shared/store/settingsStore.ts";
import { loadUserSettings } from "../services/settingsApi";
import type { ApiError } from "@/shared/api/errors";
import { useAlert } from "@/shared/hooks/useAlert";
import { defaultMessages } from "@/shared/lib/errorMessage";

export function useLoadSettings() {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const setSelectedProvider = useSettingsStore((state) => state.setSelectedProvider);
    const setSelectedTheme = useSettingsStore((state) => state.setSelectedTheme);
    const setThink = useSettingsStore((state) => state.setThink);
    const { displayAlert } = useAlert();

    const PROVIDER_LABELS: Record<string, string> = {
        OLLAMA: "Ollama",
        MISTRAL: "Mistral"
    }
    const THEME_LABELS: Record<string, string> = {
        NSKY: "Nsky"
    }

    const translateProvider = (provider: string) => {
        const label = PROVIDER_LABELS[provider];

        if (!label) throw new Error(`Could not translate provider: ${provider}`);

        return label;
    }

    const translateTheme = (theme: string) => {
        const label = THEME_LABELS[theme];

        if (!label) throw new Error(`Could not translate theme: ${theme}`);

        return label;
    }

    const loadSettings = async () => {
        setIsLoading(true);
        setError(null);

        try {
            const response = await loadUserSettings();

            setSelectedProvider(translateProvider(response.data.provider));
            setSelectedTheme(translateTheme(response.data.theme));
            setThink(response.data.think);
        } catch (error) {
            const err = error as ApiError;
            displayAlert("error", defaultMessages[err.kind]);
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
