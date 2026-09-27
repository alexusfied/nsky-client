import AddChatButton from "./AddChatButton.tsx";
import SelectChatsButton from "./SelectChatsButton.tsx";

function ActionsBar() {
    return (
        <div className="flex ps-2">
            <AddChatButton />
            <SelectChatsButton />
        </div>
    );
}

export default ActionsBar;
