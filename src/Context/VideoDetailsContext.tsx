import React, { useState, useContext, createContext } from "react";

export type VideoDetailsContextTypes = {
  hiddenDesciption: boolean;
  hiddenComments: boolean;
  changeDescriptionVisibility: () => void;
  changeCommentsVisibility: () => void;
};

const VideoDetailsContext = createContext<VideoDetailsContextTypes>({
  hiddenDesciption: true,
  hiddenComments: true,
  changeDescriptionVisibility: () => {},
  changeCommentsVisibility: () => {},
});

export const useVideoDetails = () => {
  return useContext(VideoDetailsContext);
};

type VideoDetailsProviderType = {
  children: React.ReactNode;
};

export default function VideoDetailsProvider({
  children,
}: VideoDetailsProviderType) {
  const [hiddenDesciption, setHiddenDesciption] = useState(true);
  const [hiddenComments, setHiddenComments] = useState(true);

  const changeDescriptionVisibility = () => {
    setHiddenDesciption(!hiddenDesciption);
  };

  const changeCommentsVisibility = () => {
    setHiddenComments(!hiddenComments);
  };

  const value = {
    hiddenDesciption,
    changeDescriptionVisibility,
    hiddenComments,
    changeCommentsVisibility,
  };

  return (
    <VideoDetailsContext.Provider value={value}>
      {children}
    </VideoDetailsContext.Provider>
  );
}
