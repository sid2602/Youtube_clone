import { YTItems } from "../../Types/YoutubeResponse";
import { Link } from "react-router-dom";

type Props = {
  chanel: YTItems;
};

export default function ChanelSearchPreview({ chanel }: Props) {
  return (
    <article className=" my-6">
      <Link
        to={`/channel/${chanel.snippet.channelId}`}
        className="flex flex-col items-center md:flex-row md:justify-center border-b-2 pb-4"
      >
        <div className="flex justify-center " style={{ maxWidth: "240px" }}>
          <img
            className="rounded-full"
            src={chanel.snippet.thumbnails.medium.url}
            alt={chanel.snippet.title}
          />
        </div>

        <div className="mt-2 max-w-xs md:max-w-full md:ml-4 w-full text-center md:text-left md:ml-20">
          <h3 className="text-xl">{chanel.snippet.title}</h3>

          <p className="text-gray-600">
            Data założenia: {chanel.snippet.publishTime.substr(0, 10)}
          </p>

          <p>{chanel.snippet.channelTitle}</p>

          <p className="text-gray-600 display-none hidden md:block">
            {chanel.snippet.description.substr(0, 100)} ...
          </p>
        </div>
      </Link>
    </article>
  );
}
