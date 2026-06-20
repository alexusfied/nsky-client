import Conversations from "../features/conversations/Conversations";
import Chat from "../features/chat/Chat";
import PopupDialog from "@/shared/components/PopupDialog.tsx";
import useSettingsStore from "@/shared/store/settingsStore.ts";

function ChatPage() {
    const showSettingsDialog = useSettingsStore((state) => state.showSettingsDialog);
    const setShowSettingsDialog = useSettingsStore((state) => state.setShowSettingsDialog);

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
                      <select name={`provider`} id={`provider`}>
                          <option>Ollama</option>
                      </select>
                  </div>
              }
            />
            }
        </div>
    );
}

export default ChatPage;
