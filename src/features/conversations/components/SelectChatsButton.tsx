import IconButton from "@mui/material/IconButton";
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import Tooltip from "@mui/material/Tooltip";
import useChatSelection from "../hooks/useChatSelection.ts";
import { useChats } from "../hooks/useChats.ts";

function SelectChatsButton() {
    const { isChatSelectionMode, setIsChatSelectionMode } = useChatSelection();
    const { getNumChats } = useChats();

    const handleClick = () => {
        if (getNumChats() === 0) return;

        setIsChatSelectionMode(!isChatSelectionMode);
    };

    return (
        <Tooltip title="Select chats">
            <IconButton color="primary" onClick={handleClick}>
                <CheckBoxOutlinedIcon />
            </IconButton>
        </Tooltip>
    );
}

export default SelectChatsButton;
