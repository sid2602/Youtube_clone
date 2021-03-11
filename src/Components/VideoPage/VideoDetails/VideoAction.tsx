import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type VideoActionProps = {
  count: string;
  icon: IconDefinition;
};

const VideoAction = ({ count, icon }: VideoActionProps) => (
  <div className="flex flex-col items-center px-2 lg:text-lg">
    <FontAwesomeIcon icon={icon} />
    {count}
  </div>
);

export default VideoAction;
