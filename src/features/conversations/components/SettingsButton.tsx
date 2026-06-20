import {Settings} from "lucide-react";
import useSettingsStore from "@/shared/store/settingsStore.ts";

function SettingsButton() {
    const setShowSettingsDialog = useSettingsStore((state) => state.setShowSettingsDialog);

    return (
        <button className={`cursor-pointer text-on-primary hover:text-white`} onClick={() => {
            setShowSettingsDialog(true);
        }}>
            <Settings />
        </button>
    );
}

export default SettingsButton;