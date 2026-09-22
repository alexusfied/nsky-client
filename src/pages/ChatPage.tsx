import Conversations from "../features/conversations/Conversations";
import Chat from "../features/chat/Chat";
import Settings from "../features/settings/Settings.tsx"
import useSettingsStore from "@/shared/store/settingsStore.ts";

function ChatPage() {
    const showSettingsDialog = useSettingsStore((state) => state.showSettingsDialog);

    return (
        <div className="flex flex-row h-screen">
            <Conversations />
            { 
                // TODO: Move settings dialog to its own component 
            }
            <Chat />
            { showSettingsDialog && <Settings /> }
        </div>
    );
}

export default ChatPage;
