import SettingsButton from "@/features/conversations/components/SettingsButton.tsx";
import { Stack } from "@mui/material";

function BottomBar() {
    return (
        <Stack direction="row" sx={{
            alignItems: "flex-start"
        }}>
            <SettingsButton />
        </Stack>
    );
}

export default BottomBar;
