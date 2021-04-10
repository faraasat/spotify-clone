import { FC } from "react";
import "./SidebarOptions.css";

interface ISidebarOptions {
  title: string;
  Icon?: any;
}

const SidebarOptions: FC<ISidebarOptions> = ({ title, Icon }) => {
  return (
    <div className="sidebarOption">
      {Icon && <Icon className="sidebarOption__icon" />}
      {Icon ? <h4>{title}</h4> : <p>{title}</p>}
    </div>
  );
};

export default SidebarOptions;
