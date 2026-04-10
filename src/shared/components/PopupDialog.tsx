import type {Ref} from "react";

interface IPopupDialogProps {
    onConfirm: () => void,
    onCancel: () => void,
    ref: Ref<HTMLDivElement> | undefined
    text: string
}

function PopupDialog({onConfirm, onCancel, ref, text}: IPopupDialogProps) {
    return (
        <>
            <div className={"w-screen h-screen z-30 fixed top-0 left-0 backdrop-blur-sm opacity-50 bg-black"}></div>
            <div className={"fixed top-1/2 left-1/2 p-4 bg-primary rounded-md flex flex-col gap-4 z-40"} ref={ref}>
                <p className={"text-white"}>{text}</p>
                <div className={"flex gap-3"}>
                    <button onClick={onCancel} className={"bg-gray-500 p-2 rounded-md cursor-pointer hover:bg-gray-700"}>Cancel</button>
                    <button onClick={onConfirm} className={"bg-red-400 p-2 rounded-md cursor-pointer hover:bg-red-700"}>Confirm</button>
                </div>
            </div>
        </>
    );
}

export default  PopupDialog;