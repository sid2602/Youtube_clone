import { useVideo } from "../../Context/VideoContext";
import AuthorInfo from "../AuthorInfo";
export default function ChannelInfo() {
  const { channel } = useVideo();
  const [item] = channel.items;
  return (
    <>
      {channel.items.length > 0 && (
        <>
          <div className="h-20 sm:h-40 overflow-hidden flex items-center">
            <img
              src={item.brandingSettings.image.bannerExternalUrl}
              alt="Baner"
              className="w-full "
            />
          </div>
          <div className="w-3/4 mx-auto">
            <AuthorInfo channelPage={true} />
          </div>
        </>
      )}
    </>
  );
}
