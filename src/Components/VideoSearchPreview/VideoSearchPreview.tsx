import { YTItems } from "../../Types/YoutubeResponse";
import { Link } from "react-router-dom";

type Props = {
  video: YTItems;
};

export default function VideoSearchPreview({ video }: Props) {
  return (
    <article className=" my-6 flex flex-col items-center md:flex-row md:justify-center">
      <Link to={"/video/" + video.id.videoId}>
        <div className="w-full flex justify-center">
          <img
            className="flex-1"
            src={video.snippet.thumbnails.medium.url}
            alt={video.snippet.title}
          />
        </div>
      </Link>
      <div className="mt-2 max-w-xs md:max-w-full md:ml-4 w-full ">
        <Link to={"/video/" + video.id.videoId}>
          <h3 className="text-xl">{video.snippet.title}</h3>

          <p className="text-gray-600">
            Data publikacji: {video.snippet.publishTime.substr(0, 10)}
          </p>
        </Link>
        <Link to="/channel">
          <p className=" w-1/3 transform hover:scale-110  transition md:hover:translate-x-8 lg:hover:translate-x-10 hover:translate-x-4">
            {video.snippet.channelTitle}
          </p>
        </Link>
        <Link to={"/video/" + video.id.videoId}>
          <p className="text-gray-600 display-none hidden md:block">
            {video.snippet.description.substr(0, 100)} ...
          </p>
        </Link>
      </div>
    </article>
  );
}
