import PopupDialog from "@/shared/components/PopupDialog.tsx";
import useSettingsStore from "@/shared/store/settingsStore.ts";
import { useSaveSetting } from "./hooks/useSaveSetting.ts"; 
import { useLoadSettings } from "./hooks/useLoadSettings.ts";

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
                  <div className={`flex flex-col gap-3`}>
                      {
                          // TODO: Selection rows should also be their own component 
                      }  
                      <div className={`flex justify-between w-[15vw]`}>
                          <label htmlFor={`provider`} className={`font-semibold`}>Provider</label>
                          <select 
                              defaultValue={selectedProvider} 
                              name={`provider`} 
                              id={`provider`} 
                              onChange={(event) => {
                                  setSelectedProvider(event.target.value);
                                  saveSetting("PROVIDER", event.target.value);
                              }}>
                              { providerList.map((provider) => <option>{provider}</option>) }
                          </select>
                      </div>
                      <hr />
                      <div className={`flex justify-between w-[15vw]`}>
                          <label htmlFor={`theme`} className={`font-semibold`}>Theme</label>
                          <select 
                              defaultValue={selectedTheme} 
                              name={`theme`} 
                              id={`theme`} 
                              onChange={(event) => {
                                  setSelectedTheme(event.target.value);
                                  saveSetting("THEME", event.target.value);
                              }}>
                              { themesList.map((theme) => <option>{theme}</option>) }
                          </select>
                      </div>
                      <hr />
                      <div className={`flex justify-between w-[15vw]`}>
                          <label htmlFor={`think`} className={`font-semibold`}>Think</label>
                          <input 
                              type="checkbox" 
                              id="think" 
                              name="think" 
                              checked={think} 
                              onChange={(e) => {
                                  setThink(e.target.checked);
                                  saveSetting("THINK", event.target.checked);
                              }}></input>
                      </div>
                  </div>
              }
            
        />
    );
}

export default Settings;
