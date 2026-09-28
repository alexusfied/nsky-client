import { IconButton, Tooltip } from "@mui/material";
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import useChatSelection from "../hooks/useChatSelection";
import { useDeleteChat } from "../hooks/useDeleteChat";

function DeleteChatsButton() {
    const {selectedChats, clearSelectedChats, setIsChatSelectionMode} = useChatSelection();
    const {deleteChats} = useDeleteChat();

    const handleClick = () => {
        deleteChats(selectedChats);
        clearSelectedChats();
        setIsChatSelectionMode(false);
    }

    return(
        <Tooltip title="Delete selected chats">
            <IconButton color="warning" disabled={selectedChats.length === 0 ? true : false} onClick={handleClick}>
                <DeleteOutlineOutlinedIcon />
            </IconButton>
        </Tooltip> 
    );
}

export default DeleteChatsButton;
