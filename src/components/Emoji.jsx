import horse from "../assets/horse.webp";
import thumbsUp from "../assets/thumbs-up.webp";
import meh from "../assets/meh.webp";

const Emoji = ({ rating }) => {
  if (rating < 3) return null;

  const emojiMap = {
    3: { src: meh, alt: "meh", height: "25px" },
    4: { src: thumbsUp, alt: "recommended", height: "25px" },
    5: { src: horse, alt: "exceptional", height: "35px" },
  };

  return <img {...emojiMap[rating]} className="m-2" />;
};

export default Emoji;
