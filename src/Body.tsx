import { Favorite, MoreHoriz, PlayCircleFilled } from "@material-ui/icons";
import { FC } from "react";
import "./Body.css";
import { useDataLayerValue } from "./DataLayer";
import Header from "./Header";
import SongRow from "./SongRow";

interface IBody {
  spotify: any;
}

const Body: FC<IBody> = ({ spotify }) => {
  const [{ discover_weekly }] = useDataLayerValue();

  return (
    <div className="body">
      <Header spotify={spotify} />
      <div className="body__info">
        <img src={discover_weekly?.images[0].url} alt={discover_weekly?.name} />
        <div className="body__infoText">
          <strong>PLAYLIST</strong>
          <h2>Discover Weekly</h2>
          <p
            dangerouslySetInnerHTML={{ __html: discover_weekly?.description }}
          />
        </div>
      </div>

      <div className="body__songs">
        <div className="body__icons">
          <PlayCircleFilled className="body__shuffle" />
          <Favorite fontSize="large" />
          <MoreHoriz />
        </div>

        {discover_weekly?.tracks?.items?.map((item: any) => {
          return <SongRow key={item?.id} track={item?.track} />;
        })}
      </div>
    </div>
  );
};

export default Body;
