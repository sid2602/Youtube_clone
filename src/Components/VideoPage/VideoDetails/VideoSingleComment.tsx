import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

import { TopLevelComment } from "../../../Types/VideoCommentsResponse";

const VideoSingleComment = ({ snippet }: TopLevelComment) => {
  return (
    <div className="flex p-2 pb-4 my-4 items-center border-b-2 lg:border-b-0 ">
      <Link className="rounded-full w-10 h-10 overflow-hidden" to="/chanel">
        <img
          className="w-full"
          src={snippet.authorProfileImageUrl}
          alt={snippet.authorDisplayName}
        />
      </Link>
      <div className="flex flex-col ml-4 w-4/5">
        <Link to="/chanel">
          {snippet.authorDisplayName}
          <span className="text-gray-500 text-sm ml-2">
            {snippet.publishedAt.substr(0, 10)}
          </span>
        </Link>
        <p className="text-sm mt-2">{snippet.textOriginal}</p>
        <div className="flex items-center mt-2">
          <FontAwesomeIcon icon={faThumbsUp} />
          <p className="ml-2">{snippet.likeCount > 0 && snippet.likeCount}</p>
          <FontAwesomeIcon icon={faThumbsDown} className="ml-2" />
        </div>
      </div>
    </div>
  );
};

export default VideoSingleComment;
