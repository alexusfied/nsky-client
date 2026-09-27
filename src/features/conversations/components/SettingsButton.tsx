import useSettingsStore from "@/shared/store/settingsStore.ts";
import IconButton from "@mui/material/IconButton";
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import Tooltip from '@mui/material/Tooltip';

function SettingsButton() {
    const setShowSettingsDialog = useSettingsStore((state) => state.setShowSettingsDialog);

    return (
        <Tooltip title="Show settings">
            <IconButton onClick={() => {setShowSettingsDialog(true)}} color="primary">
                <SettingsOutlinedIcon />
            </IconButton>
        </Tooltip>
    );
}

export default SettingsButton;
