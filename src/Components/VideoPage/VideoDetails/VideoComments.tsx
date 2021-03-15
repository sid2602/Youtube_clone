import { useVideo } from "../../../Context/VideoContext";
import VideoSingleComment from "./VideoSingleComment";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useVideoDetails } from "../../../Context/VideoDetailsContext";

export default function VideoComments() {
  const { comments, commentsError } = useVideo();
  const { changeCommentsVisibility, hiddenComments } = useVideoDetails();

  return (
    <>
      <div
        className="p-2 flex justify-between border-b-2 items-center transition cursor-pointer lg:cursor-auto"
        onClick={changeCommentsVisibility}
      >
        <h3 className=" text-xl ">Komentarze</h3>
        <FontAwesomeIcon
          icon={hiddenComments ? faChevronDown : faChevronUp}
          className="mr-4 text-lg lg:hidden"
        />
      </div>
      <div className={`${hiddenComments && "hidden"} lg:block `}>
        {!commentsError ? (
          comments.items.map((comment) => {
            const { snippet } = comment.snippet.topLevelComment;

            return <VideoSingleComment snippet={snippet} key={comment.id} />;
          })
        ) : (
          <div className="text-center mt-2">{commentsError}</div>
        )}
      </div>
    </>
  );
}
