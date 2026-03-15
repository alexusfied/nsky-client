import Conversations from "../features/conversations/Conversations";
import Chat from "../features/chat/Chat";

function ChatPage() {
    return (
        <div className="flex flex-row h-screen">
            <Conversations />
            <Chat />
        </div>
    );
}

export default ChatPage;
