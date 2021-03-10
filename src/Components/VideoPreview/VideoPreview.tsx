import { YTItems } from "../../Types/YoutubeResponse";
import { Link } from "react-router-dom";

type Props = {
  video: YTItems;
};

export default function VideoPreview({ video }: Props) {
  return (
    <article className="w-full max-w-xs mb-6 sm:my-6">
      <Link to={"/video/" + video.id.videoId}>
        <div className="w-full h-44  ">
          <img
            src={video.snippet.thumbnails.medium.url}
            alt={video.snippet.title}
          />
        </div>
      </Link>
      <div className="flex my-4">
        <div className="flex flex-col w-4/5 ml-4">
          <Link to={"/video/" + video.id.videoId}>
            <p className="w-full font-bold text-sm block">
              {video.snippet.title}
            </p>
          </Link>
          <Link to="/chanel">
            <p className="transition  mt-2 text-sm transform hover:scale-110 hover:translate-x-4 ">
              {video.snippet.channelTitle}
            </p>
          </Link>
        </div>
      </div>
    </article>
  );
}
