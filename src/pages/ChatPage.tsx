import Conversations from "../features/conversations/Conversations";
import Chat from "../features/chat/Chat";
import PopupDialog from "@/shared/components/PopupDialog.tsx";
import useSettingsStore from "@/shared/store/settingsStore.ts";

function ChatPage() {
    const showSettingsDialog = useSettingsStore((state) => state.showSettingsDialog);
    const setShowSettingsDialog = useSettingsStore((state) => state.setShowSettingsDialog);
    const selectedProvider = useSettingsStore((state) => state.selectedProvider);
    const setSelectedProvider = useSettingsStore((state) => state.setSelectedProvider);
    const providerList = useSettingsStore((state) => state.providerList);
    const themesList = useSettingsStore((state) => state.themesList);
    const selectedTheme = useSettingsStore((state) => state.selectedTheme);
    const setSelectedTheme = useSettingsStore((state) => state.setSelectedTheme);

    return (
        <div className="flex flex-row h-screen">
            <Conversations />
            { 
                // TODO: Move settings dialog to its own component 
            }
            <Chat />
            { showSettingsDialog && <PopupDialog
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
                          <select defaultValue={selectedProvider} name={`provider`} id={`provider`} onChange={(event) => {setSelectedProvider(event.target.value)}}>
                              {
                                  providerList.map((provider) => <option>{provider}</option>)
                              }
                          </select>
                      </div>
                      <hr />
                      <div className={`flex justify-between w-[15vw]`}>
                          <label htmlFor={`theme`} className={`font-semibold`}>Theme</label>
                          <select defaultValue={selectedTheme} name={`theme`} id={`theme`} onChange={(event) => {setSelectedTheme(event.target.value)}}>
                              {
                                  themesList.map((theme) => <option>{theme}</option>)
                              }
                          </select>
                      </div>
                  </div>
              }
            />
            }
        </div>
    );
}

export default ChatPage;
