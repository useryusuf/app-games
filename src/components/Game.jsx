import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import noImage from "../assets/no-image-placeholder.webp";

const Game = ({ data }) => {
  const navigate = useNavigate();

  const iconMap = {
    pc: FaWindows,
    playstation: FaPlaystation,
    playstation4: FaPlaystation,
    xbox: FaXbox,
    xbox360: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    ios: MdPhoneIphone,
    web: BsGlobe,
  };

  const mapPlatforms = ({ platform }) => {
    const IconComponent = iconMap[platform.slug];
    if (IconComponent) return <IconComponent key={platform.id} />;
  };
  return (
    <div
      className="card rounded rounded-3 cursor-pointer"
      onClick={() => navigate(`/game/${data.id}`)}
    >
      <img
        src={data.background_image ? data.background_image : noImage}
        className="card-img-top"
        alt=""
      />
      <div className="card-body">
        <div className="d-flex justify-content-between mb-3">
          <div className="platforms">
            {data.platforms && data.platforms.map(mapPlatforms)}
          </div>
          <div className="score my-1 badge bg-success">92</div>
        </div>
        <h3 className="card-text fw-bold">{data.name}</h3>
      </div>
    </div>
  );
};

export default Game;
