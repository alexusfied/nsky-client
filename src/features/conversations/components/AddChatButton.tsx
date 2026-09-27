import useChatStore from "@/shared/store/chatStore.ts";
import IconButton from "@mui/material/IconButton";
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import Tooltip from "@mui/material/Tooltip";

function AddChatButton() {
    const setSelectedChat = useChatStore((store) => store.setSelectedChat);

    return (
        <Tooltip title="Add chat">
            <IconButton onClick={() => {setSelectedChat(null)}} color="primary">
                <AddCircleOutlineOutlinedIcon />
            </IconButton>
        </Tooltip>
    );
}

export default AddChatButton;
