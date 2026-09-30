import useSettingsStore from "@/shared/store/settingsStore.ts";
import { saveUserSetting } from "../services/settingsApi.ts";
import { useAlert } from "@/shared/hooks/useAlert.ts";
import type { ApiError } from "@/shared/api/errors.ts";
import { defaultMessages } from "@/shared/lib/errorMessage.ts"

export function useSaveSetting() {
    const selectedProvider = useSettingsStore((state) => state.selectedProvider);
    const setSelectedProvider = useSettingsStore((state) => state.setSelectedProvider);
    const providerList = useSettingsStore((state) => state.providerList);
    const themesList = useSettingsStore((state) => state.themesList);
    const selectedTheme = useSettingsStore((state) => state.selectedTheme);
    const setSelectedTheme = useSettingsStore((state) => state.setSelectedTheme);
    const think = useSettingsStore((state) => state.think);
    const setThink = useSettingsStore((state) => state.setThink);
    
    const { displayAlert } = useAlert();

    const handleError = (err: unknown) => {
        const error = err as ApiError;
        displayAlert("error", defaultMessages[error.kind]);
    }

    const saveSetting = async (settingName: string, updatedValue: any) => {
        if (settingName === "PROVIDER") {
            try {
                await saveUserSetting(updatedValue.toUpperCase(), null, null);
                setSelectedProvider(updatedValue);
            } catch (error) {
                handleError(error);
            }
        } else if (settingName === "THEME") {
            try {
                await saveUserSetting(null, updatedValue.toUpperCase(), null);
                setSelectedTheme(updatedValue);
            } catch (error) {
                handleError(error);
            }
        } else if (settingName === "THINK") {
            try {
                await saveUserSetting(null, null, updatedValue);
                setThink(updatedValue);
            } catch (error) {
                handleError(error);
            }
        }
        displayAlert("success", "Saved setting successfully");
    }

    return {
        selectedProvider,
        setSelectedProvider,
        providerList,
        themesList,
        selectedTheme,
        setSelectedTheme,
        think,
        setThink,
        saveSetting
    }
}
