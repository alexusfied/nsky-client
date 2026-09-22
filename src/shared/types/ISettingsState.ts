interface ISettingsState {
    showSettingsDialog: boolean,
    setShowSettingsDialog: (value: boolean) => void
    selectedProvider: string,
    setSelectedProvider: (value: string) => void,
    providerList: string[],
    think: boolean,
    setThink: (value: boolean) => void
}

export type { ISettingsState }
