import {PanelLeft} from "lucide-react";

interface IToggleSidebarButton {
  onHide: () => void
}

function ToggleSidebarButton({onHide}: IToggleSidebarButton) {

  return (
    <button
      className={"cursor-pointer text-on-primary hover:bg-on-primary hover:rounded-md hover:text-primary p-2"}
      onClick={() => onHide()}
    >
      <PanelLeft></PanelLeft>
    </button>
  );
}

export default ToggleSidebarButton;