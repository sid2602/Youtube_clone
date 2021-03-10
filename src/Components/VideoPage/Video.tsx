import { useVideo } from "../../Context/VideoContext";

export default function Video() {
  const { specificVideo } = useVideo();

  return (
    <article className="w-full lg:w-2/3 sm:p-10">
      <div
        className="relative overflow-hidden "
        style={{ paddingTop: "56.25%", overflow: "hidden" }}
      >
        {specificVideo.items.map((item) => (
          <iframe
            className="absolute top-0 left-0 w-full h-full border-0"
            title={item.snippet.title}
            allow="encrypted-media"
            allowFullScreen
            src={"https://www.youtube.com/embed/" + item.id}
            key={item.id}
          />
        ))}
      </div>
    </article>
  );
}
