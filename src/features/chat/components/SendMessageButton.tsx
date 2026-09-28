import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';

interface SendMessageButtonProps {
    onSend: () => void,
    message: string
}

function SendMessageButton({onSend, message}: SendMessageButtonProps) {
    return (
        <Tooltip title="Send message">
            <IconButton onClick={onSend} color="primary" disabled={message === "" ? true : false}>
                <SendOutlinedIcon />
            </IconButton>
        </Tooltip>
    );
}

export default SendMessageButton;
