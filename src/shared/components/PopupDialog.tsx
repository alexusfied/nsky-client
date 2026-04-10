import type {Ref} from "react";

interface IPopupDialogProps {
    onConfirm: () => void,
    onCancel: () => void,
    ref: Ref<HTMLDivElement> | undefined
    text: string
}

function PopupDialog({onConfirm, onCancel, ref, text}: IPopupDialogProps) {
    return (
        <div className={"fixed top-1/2 left-1/2 p-3 bg-primary rounded-md flex-col"} ref={ref}>
            <p className={"text-white"}>{text}</p>
            <div className={"flex"}>
                <button onClick={onCancel}>Cancel</button>
                <button onClick={onConfirm}>Confirm</button>
            </div>
        </div>
    );
}

export default  PopupDialog;