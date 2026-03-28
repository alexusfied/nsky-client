import {CirclePlus} from "lucide-react";

function AddChatButton() {
    return (
        <div className="flex gap-2">
            <button className="cursor-pointer text-on-primary">
                <CirclePlus />
            </button>
        </div>
    );
}

export default AddChatButton;