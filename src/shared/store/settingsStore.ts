import {create} from "zustand";
import type {ISettingsState} from "@/shared/types/ISettingsState.ts";

const useSettingsStore = create<ISettingsState>((set) => ({
    showSettingsDialog: false,
    setShowSettingsDialog: (value: boolean) => set(() => ({ showSettingsDialog: value }))
}));

export default useSettingsStore;