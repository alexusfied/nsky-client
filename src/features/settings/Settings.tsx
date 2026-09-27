import PopupDialog from "@/shared/components/PopupDialog.tsx";
import useSettingsStore from "@/shared/store/settingsStore.ts";
import { useSaveSetting } from "./hooks/useSaveSetting.ts"; 
import { useLoadSettings } from "./hooks/useLoadSettings.ts";

import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Switch from "@mui/material/Switch";

function Settings() {
    const setShowSettingsDialog = useSettingsStore((state) => state.setShowSettingsDialog);
    const {
        selectedProvider,
        setSelectedProvider,
        providerList,
        themesList,
        selectedTheme,
        setSelectedTheme,
        think,
        setThink,
        saveSetting
    } = useSaveSetting();
    const {isLoading, error} = useLoadSettings();

    return (
        <PopupDialog
              onConfirm={() => {}}
              onCancel={() => {
                  setShowSettingsDialog(false);
              }}
              hideButtons={true}
              children={
                  <div className={`flex flex-col gap-4`}>
                      {
                          // TODO: Selection rows should also be their own component 
                      }  
                      <div className={`flex justify-between w-[15vw] items-center`}>
                          <label htmlFor={`provider`} className={`font-semibold`}>Provider</label>
                          <Select 
                              value={selectedProvider}
                              id={`provider`} 
                              onChange={(event) => {
                                  setSelectedProvider(event.target.value as string);
                                  saveSetting("PROVIDER", event.target.value as string);
                              }}>
                              { providerList.map((provider) => <MenuItem value={provider}>{provider}</MenuItem>) }
                          </Select>
                      </div>
                      <div className={`flex justify-between w-[15vw] items-center`}>
                          <label htmlFor={`theme`} className={`font-semibold`}>Theme</label>
                          <Select 
                              value={selectedTheme} 
                              id={`theme`} 
                              onChange={(event) => {
                                  setSelectedTheme(event.target.value as string);
                                  saveSetting("THEME", event.target.value as string);
                              }}>
                              { themesList.map((theme) => <MenuItem value={theme}>{theme}</MenuItem>) }
                          </Select>
                      </div>
                      <div className={`flex justify-between w-[15vw]`}>
                          <label htmlFor={`think`} className={`font-semibold`}>Think</label>
                          <Switch 
                              checked={think}
                              onChange={(e) => {
                                  setThink(e.target.checked);
                                  saveSetting("THINK", e.target.checked);
                              }}
                              slotProps={{ input: { 'aria-label': 'controlled' } }}
                          />
                      </div>
                  </div>
              }
            
        />
    );
}

export default Settings;
