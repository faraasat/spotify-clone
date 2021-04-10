import "./Sidebar.css";
import SidebarOptions from "./SidebarOptions";

function Sidebar() {
  return (
    <div className="sidebar">
      <img
        className="sidebar__logo"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt="Img"
      />
      <SidebarOptions title="Home" Icon="" />
      <SidebarOptions title="Search" Icon="" />
      <SidebarOptions title="Your Build" Icon="" />
    </div>
  );
}

export default Sidebar;
