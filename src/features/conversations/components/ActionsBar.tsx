import useChatSelection from "../hooks/useChatSelection.ts";
import AddChatButton from "./AddChatButton.tsx";
import SelectChatsButton from "./SelectChatsButton.tsx";
import DeleteChatsButton from "./DeleteChatsButton.tsx";
import { Stack } from "@mui/material";

function ActionsBar() {
    const {isChatSelectionMode} = useChatSelection();

    return (
        <Stack direction="row" sx={{
            alignItems: "flex-start"
        }}>
            <AddChatButton />
            <SelectChatsButton />
            {isChatSelectionMode && <DeleteChatsButton />}
        </Stack>
    );
}

export default ActionsBar;
