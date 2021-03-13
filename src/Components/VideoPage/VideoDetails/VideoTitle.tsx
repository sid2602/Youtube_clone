import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useVideoDetails } from "../../../Context/VideoDetailsContext";
import { SpecificVideoItem } from "../../../Types/VideoResponse";

type Props = {
  item: SpecificVideoItem;
};

const VideoTitle = ({ item }: Props) => {
  const { changeDescriptionVisibility, hiddenDesciption } = useVideoDetails();

  return (
    <div
      className="flex items-center justify-between pb-2 m-0 w-full text-left cursor-pointer lg:cursor-auto "
      onClick={changeDescriptionVisibility}
    >
      <h2 className="lg:text-lg">{item.snippet.title}</h2>
      <FontAwesomeIcon
        icon={hiddenDesciption ? faChevronDown : faChevronUp}
        className="mx-4 text-lg lg:hidden"
      />
    </div>
  );
};

export default VideoTitle;
