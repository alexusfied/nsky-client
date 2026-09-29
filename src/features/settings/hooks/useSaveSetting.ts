import useSettingsStore from "@/shared/store/settingsStore.ts";
import { saveUserSetting } from "../services/settingsApi.ts";
import { useAlert } from "@/shared/hooks/useAlert.ts";
import type { ApiError } from "@/shared/api/errors.ts";

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

    const saveSetting = async (settingName: string, updatedValue: any) => {
        if (settingName === "PROVIDER") {
            try {
                await saveUserSetting(updatedValue.toUpperCase(), null, null); 
            } catch (error) {
                const err = error as ApiError;
                displayAlert("error", err.message);
            }
        } else if (settingName === "THEME") {
            await saveUserSetting(null, updatedValue.toUpperCase(), null);
        } else if (settingName === "THINK") {
            await saveUserSetting(null, null, updatedValue);
        }
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
