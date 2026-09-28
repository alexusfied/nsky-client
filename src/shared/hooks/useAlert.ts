import useAlertStore from "../store/alertStore";

export function useAlert() {
    const showAlert = useAlertStore((state) => state.showAlert);
    const setShowAlert = useAlertStore((state) => state.setShowAlert);
    const severity = useAlertStore((state) => state.severity);
    const setSeverity = useAlertStore((state) => state.setSeverity);
    const message = useAlertStore((state) => state.message);
    const setMessage = useAlertStore((state) => state.setMessage);

    return {
        showAlert,
        setShowAlert,
        severity,
        setSeverity,
        message,
        setMessage
    }
}
