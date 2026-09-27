import IconButton from "@mui/material/IconButton";
import ViewSidebarOutlinedIcon from '@mui/icons-material/ViewSidebarOutlined';
import Tooltip from "@mui/material/Tooltip";

interface ToggleSidebarButtonProps {
    onHide: () => void,
    sidebarHidden: boolean
}

function ToggleSidebarButton({onHide, sidebarHidden}: ToggleSidebarButtonProps) {
    return (
        <Tooltip title={sidebarHidden ? "Show sidebar" : "Hide sidebar"}>
            <IconButton color="primary" onClick={onHide}>
                <ViewSidebarOutlinedIcon />
            </IconButton>
        </Tooltip>
    );
}

export default ToggleSidebarButton;
