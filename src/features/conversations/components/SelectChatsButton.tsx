import IconButton from "@mui/material/IconButton";
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import Tooltip from "@mui/material/Tooltip";
import useChatSelection from "../hooks/useChatSelection.ts";

function SelectChatsButton() {
    const {isChatSelectionMode, setIsChatSelectionMode} = useChatSelection();

    return (
        <Tooltip title="Select chats">
            <IconButton color="primary" onClick={() => {setIsChatSelectionMode(!isChatSelectionMode)}}>
                <CheckBoxOutlinedIcon />
            </IconButton>
        </Tooltip>
    );
}

export default SelectChatsButton;
