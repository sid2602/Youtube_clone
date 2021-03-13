export type VideoCommentsResponse = {
  kind: string;
  etag: string;
  nextPageToken: string;
  items: Array<VideoCommentsitem>;
};

export type VideoCommentsitem = {
  kind: string;
  etag: string;
  id: string;
  snippet: {
    topLevelComment: TopLevelComment;
  };
  isPublic: boolean;
};

export type TopLevelComment = {
  snippet: {
    textDisplay: string;
    textOriginal: string;
    authorDisplayName: string;
    authorProfileImageUrl: string;
    authorChannelId: {
      value: string;
    };
    canrate: boolean;
    viewerRating: string;
    likeCount: number;
    publishedAt: string;
    updatedAt: string;
  };
};

export const defaultCommentsResponse: VideoCommentsResponse = {
  kind: "",
  etag: "",
  nextPageToken: "",
  items: [],
};
