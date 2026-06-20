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

    return (
        <div className="flex flex-row h-screen">
            <Conversations />
            <Chat />
            { showSettingsDialog && <PopupDialog
              onConfirm={() => {}}
              onCancel={() => {
                  setShowSettingsDialog(false);
              }}
              hideButtons={true}
              children={
                  <div className={`flex justify-between w-[15vw]`}>
                      <label htmlFor={`provider`}>Provider</label>
                      <select defaultValue={selectedProvider} name={`provider`} id={`provider`} onChange={(event) => {setSelectedProvider(event.target.value)}}>
                          {
                              providerList.map((provider) => <option>{provider}</option>)
                          }
                      </select>
                  </div>
              }
            />
            }
        </div>
    );
}

export default ChatPage;
