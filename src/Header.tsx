import { FC } from "react";
import "./Header.css";
import { Search } from "@material-ui/icons";
import { Avatar } from "@material-ui/core";
import { useDataLayerValue } from "./DataLayer";

interface IHeader {
  spotify: any;
}

const Header: FC<IHeader> = ({ spotify }) => {
  const [{ user }] = useDataLayerValue();

  return (
    <div className="header">
      <div className="header__left">
        <Search />
        <input
          placeholder="Search for Artist, Songs and Podcasts"
          type="text"
        />
      </div>
      <div className="header__right">
        <Avatar src={user?.images[0]} alt={user?.display_name} />
        <h4>{user?.display_name}</h4>
      </div>
    </div>
  );
};

export default Header;
