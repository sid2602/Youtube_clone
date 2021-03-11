import { thumbinal } from "./YoutubeResponse";

export type SpecificVideo = {
  kind: string;
  etag: string;
  items: Array<SpecificVideoItem>;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
};

export type SpecificVideoItem = {
  kind: string;
  etag: string;
  id: string;
  snippet: {
    publishedAt: string;
    channelId: string;
    title: string;
    description: string;
    thumbnails: {
      default: thumbinal;
      medium: thumbinal;
      high: thumbinal;
      standard?: thumbinal;
    };
    channelTitle: string;
    tags: Array<string>;
    categoryId: string;
    liveBroadcastContent: string;
    localized: {
      title: string;
      description: string;
    };
    defaultAudioLanguage: string;
  };
  statistics: Statistic;
};

export type Statistic = {
  viewCount: string;
  likeCount: string;
  dislikeCount: string;
  favoriteCount: string;
  commentCount: string;
};

export const defaultVideoResponse: SpecificVideo = {
  kind: "",
  etag: "",
  items: [],
  pageInfo: {
    totalResults: 0,
    resultsPerPage: 0,
  },
};
