import type {Ref} from "react";

function PopupDialog({onConfirm, onCancel, ref}: {onConfirm: () => void, onCancel: () => void, ref: Ref<HTMLDivElement> | undefined}) {
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