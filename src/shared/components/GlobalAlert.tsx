import { Snackbar, Alert } from "@mui/material"
import { useAlert } from "../hooks/useAlert";

function GlobalAlert() {
    const { showAlert, severity, message } = useAlert();

    return(
        <Snackbar autoHideDuration={6000} anchorOrigin={{ vertical: "top", horizontal: "right" }} open={showAlert}>
            <Alert severity={severity}>{message}</Alert>
        </Snackbar> 
    );
}

export default GlobalAlert;
