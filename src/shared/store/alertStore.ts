import {create} from "zustand";
import type { IAlertState } from "../types/IAlertState";

const useAlertStore = create<IAlertState>((set) => ({
    showAlert: false,
    setShowAlert: (value) => set(() => ({ showAlert: value })),
    severity: "info",
    setSeverity: (value) => set(() => ({ severity: value })),
    message: "",
    setMessage: (msg) => set(() => ({ message: msg }))
}));

export default useAlertStore;
