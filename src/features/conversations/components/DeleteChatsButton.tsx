import { IconButton, Tooltip } from "@mui/material";
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import useChatSelection from "../hooks/useChatSelection";
import { useDeleteChat } from "../hooks/useDeleteChat";

function DeleteChatsButton() {
    const {selectedChats} = useChatSelection();
    const {deleteChats} = useDeleteChat();

    return(
        <Tooltip title="Delete selected chats">
            <IconButton color="warning" disabled={selectedChats.length === 0 ? true : false} onClick={() => {deleteChats(selectedChats)}}>
                <DeleteOutlineOutlinedIcon />
            </IconButton>
        </Tooltip> 
    );
}

export default DeleteChatsButton;
