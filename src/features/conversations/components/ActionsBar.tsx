import useChatSelection from "../hooks/useChatSelection.ts";
import AddChatButton from "./AddChatButton.tsx";
import SelectChatsButton from "./SelectChatsButton.tsx";
import DeleteChatsButton from "./DeleteChatsButton.tsx";

function ActionsBar() {
    const {isChatSelectionMode} = useChatSelection();

    return (
        <div className="flex ps-2">
            <AddChatButton />
            <SelectChatsButton />
            {isChatSelectionMode && <DeleteChatsButton />}
        </div>
    );
}

export default ActionsBar;
