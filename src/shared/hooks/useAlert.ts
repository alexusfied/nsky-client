import type { AlertProps, AlertPropsColorOverrides } from "@mui/material";
import useAlertStore from "../store/alertStore";
import type { OverridableStringUnion } from "@mui/types";

export function useAlert() {
    const showAlert = useAlertStore((state) => state.showAlert);
    const setShowAlert = useAlertStore((state) => state.setShowAlert);
    const severity = useAlertStore((state) => state.severity);
    const setSeverity = useAlertStore((state) => state.setSeverity);
    const message = useAlertStore((state) => state.message);
    const setMessage = useAlertStore((state) => state.setMessage);

    const displayAlert = (severity: OverridableStringUnion<AlertProps, AlertPropsColorOverrides>, message: string) => {
        setSeverity(severity);
        setMessage(message);
        setShowAlert(true);
    }

    return {
        showAlert,
        setShowAlert,
        severity,
        setSeverity,
        message,
        setMessage,
        displayAlert
    }
}
