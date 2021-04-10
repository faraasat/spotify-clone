import { FC } from "react";
import "./Player.css";

interface IPlayer {
  spotify: any;
}

const Player: FC<IPlayer> = ({ spotify }) => {
  return (
    <div>
      <h1>Welcome to Spotify</h1>
    </div>
  );
};

export default Player;
