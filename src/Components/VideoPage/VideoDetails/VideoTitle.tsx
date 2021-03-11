import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SpecificVideoItem } from "../../../Types/VideoResponse";

type Props = {
  item: SpecificVideoItem;
};

const VideoTitle = ({ item }: Props) => (
  <button className="flex items-center justify-between pb-2 m-0 w-full text-left lg:cursor-auto">
    <h2 className="lg:text-lg">{item.snippet.title}</h2>
    <FontAwesomeIcon icon={faChevronDown} className="mx-4 text-lg lg:hidden" />
  </button>
);

export default VideoTitle;
