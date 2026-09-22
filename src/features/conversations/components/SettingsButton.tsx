import {Settings} from "lucide-react";
import useSettingsStore from "@/shared/store/settingsStore.ts";

function SettingsButton() {
    const setShowSettingsDialog = useSettingsStore((state) => state.setShowSettingsDialog);

    return (
        <button className={`cursor-pointer text-on-primary hover:bg-on-primary hover:rounded-md hover:text-primary p-2`} onClick={() => {
            setShowSettingsDialog(true);
        }}>
            <Settings />
        </button>
    );
}

export default SettingsButton;
