interface ISettingsState {
    showSettingsDialog: boolean,
    setShowSettingsDialog: (value: boolean) => void
    selectedProvider: string,
    setSelectedProvider: (value: string) => void,
    providerList: string[]
}

export type { ISettingsState }