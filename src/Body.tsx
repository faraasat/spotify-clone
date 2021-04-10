import { FC } from "react";
import "./Body.css";
import Header from "./Header";

interface IBody {
  spotify: any;
}

const Body: FC<IBody> = ({ spotify }) => {
  return (
    <div className="body">
      <Header spotify={spotify} />
    </div>
  );
};

export default Body;
