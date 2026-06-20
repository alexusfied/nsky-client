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
              children={<div></div>}
            />
            }
        </div>
    );
}

export default ChatPage;
