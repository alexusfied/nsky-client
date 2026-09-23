import useSettingsStore from "@/shared/store/settingsStore.ts";
import { saveUserSetting } from "../services/settingsApi.ts";

export function useSaveSetting() {
    const selectedProvider = useSettingsStore((state) => state.selectedProvider);
    const setSelectedProvider = useSettingsStore((state) => state.setSelectedProvider);
    const providerList = useSettingsStore((state) => state.providerList);
    const themesList = useSettingsStore((state) => state.themesList);
    const selectedTheme = useSettingsStore((state) => state.selectedTheme);
    const setSelectedTheme = useSettingsStore((state) => state.setSelectedTheme);
    const think = useSettingsStore((state) => state.think);
    const setThink = useSettingsStore((state) => state.setThink);

    const saveSetting = async (settingName: string) => {
        if (settingName === "PROVIDER") {
            saveUserSetting(selectedProvider.toUpperCase(), null, null); 
        } else if (settingName === "THEME") {
            saveUserSetting(null, selectedTheme.toUpperCase(), null);
        } else if (settingName === "THINK") {
            saveUserSetting(null, null, think);
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
