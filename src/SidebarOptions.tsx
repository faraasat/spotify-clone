import { FC } from "react";
import "./SidebarOptions.css";

interface ISidebarOptions {
  title: string;
  Icon: any;
}

const SidebarOptions: FC<ISidebarOptions> = ({ title, Icon }) => {
  return (
    <div className="sidebarOption">
      <p>{title}</p>
    </div>
  );
};

export default SidebarOptions;
