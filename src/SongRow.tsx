import { FC } from "react";
import "./SongRow.css";

interface ISongRow {
  track: any;
}

const SongRow: FC<ISongRow> = ({ track }) => {
  return (
    <div className="songRow">
      <img
        className="songRow__album"
        src={track?.album?.images[0]?.url}
        alt={track?.name}
      />
      <div className="songRow__info">
        <h1>{track?.name}</h1>
        <p>
          {track.artists.map((artist: any) => artist?.name).join(", ")} -{" "}
          {track?.album?.name}
        </p>
      </div>
    </div>
  );
};

export default SongRow;
