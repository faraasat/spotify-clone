import { FC } from "react";
import "./Player.css";
import Sidebar from "./Sidebar";
import Body from "./Body";

interface IPlayer {
  spotify: any;
}

const Player: FC<IPlayer> = ({ spotify }) => {
  return (
    <div className="player">
      <div className="player__body">
        <Sidebar />
        <Body />
      </div>
    </div>
  );
};

export default Player;
