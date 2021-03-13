import { useVideo } from "../../../Context/VideoContext";
import { useVideoDetails } from "../../../Context/VideoDetailsContext";

export default function VideoDescription() {
  const { specificVideo } = useVideo();
  const { hiddenDesciption } = useVideoDetails();
  const [item] = specificVideo.items;

  return (
    <>
      {item && (
        <div
          className={`p-2 border-b-2 ${
            hiddenDesciption ? "hidden" : "block"
          } lg:block`}
        >
          <h5 className="text-sm text-gray-500">
            Opublikowano {item.snippet.publishedAt.substr(0, 10)}
          </h5>
          <p className="mt-2">{item.snippet.description}</p>
        </div>
      )}
    </>
  );
}
