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

const Game = ({ data }) => {
  const iconMap = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    ios: MdPhoneIphone,
    web: BsGlobe,
  };
  return (
    <div className="col">
      <div className="card cursor-pointer rounded rounded-3">
        <img src={data.background_image} className="card-img-top" alt="" />
        <div className="card-body">
          <div className="d-flex justify-content-between">
            <div className="platforms">
              {data.platforms &&
                data.platforms.map((platform) => {
                  const IconComponent = iconMap[platform.slug];
                  if (IconComponent) return <IconComponent key={platform.id} />;
                })}
            </div>
            <div className="score my-1 badge bg-success">92</div>
          </div>
          <h3 className="card-text fw-bold">{data.name}</h3>
          <div className="emoji">M</div>
        </div>
      </div>
    </div>
  );
};

export default Game;
