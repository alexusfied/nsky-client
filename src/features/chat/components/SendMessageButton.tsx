import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';

interface SendMessageButtonProps {
    onSend: () => void
}

function SendMessageButton({onSend}: SendMessageButtonProps) {
    return (
        <Tooltip title="Send message">
            <IconButton onClick={onSend} color="primary">
                <SendOutlinedIcon />
            </IconButton>
        </Tooltip>
    );
}

export default SendMessageButton;
