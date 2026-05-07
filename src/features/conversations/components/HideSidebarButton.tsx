import {PanelLeft} from "lucide-react";

function HideSidebarButton() {
  return (
    <button className={"cursor-pointer text-on-primary hover:bg-on-primary hover:rounded-md hover:text-primary p-2"}>
      <PanelLeft></PanelLeft>
    </button>
  );
}

export default HideSidebarButton;