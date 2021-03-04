import { useVideo } from "../../Context/VideoContext";

export default function VideoPlaceholder() {
  return (
    <article className="w-full max-w-xs mb-6 sm:my-6">
      <div className="w-full h-44 bg-gray-300 "></div>
      <div className="flex my-4">
        <div className="rounded-full h-8 w-8 bg-gray-300"></div>
        <div className="flex flex-col w-4/5 ml-4">
          <p className="w-full bg-gray-300  h-4"></p>
          <p className="w-1/2 bg-gray-300  h-4 mt-4"></p>
        </div>
      </div>
    </article>
  );
}
