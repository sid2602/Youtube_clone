import { useVideo } from "../../Context/VideoContext";

export default function Video() {
  const { specificVideo } = useVideo();

  const [item] = specificVideo.items;

  return (
    <div
      className="relative overflow-hidden "
      style={{ paddingTop: "56.25%", overflow: "hidden" }}
    >
      {specificVideo.items.length > 0 && (
        <iframe
          className="absolute top-0 left-0 w-full h-full border-0"
          title={item.snippet.title}
          allow="encrypted-media"
          allowFullScreen
          src={"https://www.youtube.com/embed/" + item.id}
        />
      )}
    </div>
  );
}
