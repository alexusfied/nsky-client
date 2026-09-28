import type { AlertProps, AlertPropsColorOverrides } from "@mui/material";
import type { OverridableStringUnion } from "@mui/types";

interface IAlertState {
    showAlert: boolean,
    setShowAlert: (value: boolean) => void,
    severity: OverridableStringUnion<AlertProps, AlertPropsColorOverrides> | undefined,
    setSeverity: (value: string) => void,
    message: string,
    setMessage: (msg: string) => void
}

export type { IAlertState };
