import type {Ref} from "react";

interface IPopupDialogProps {
    onConfirm: () => void,
    onCancel: () => void,
    ref: Ref<HTMLDivElement> | undefined
}

function PopupDialog({onConfirm, onCancel, ref}: IPopupDialogProps) {
    return (
        <div className={"fixed top-1/2 left-1/2 p-3 bg-primary rounded-md flex-col"} ref={ref}>
            <p className={"text-white"}>This is the popup</p>
            <div className={"flex"}>
                <button onClick={onCancel}>Cancel</button>
                <button onClick={onConfirm}>Confirm</button>
            </div>
        </div>
    );
}

export default  PopupDialog;