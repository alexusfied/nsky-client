import {create} from "zustand";
import type {ISettingsState} from "@/shared/types/ISettingsState.ts";

const useSettingsStore = create<ISettingsState>((set) => ({
    showSettingsDialog: false,
    setShowSettingsDialog: (value: boolean) => set(() => ({ showSettingsDialog: value })),
    selectedProvider: "Ollama",
    setSelectedProvider: (value: string) => set(() => ({ selectedProvider: value })),
    providerList: ["Ollama", "Mistral"]
}));

export default useSettingsStore;