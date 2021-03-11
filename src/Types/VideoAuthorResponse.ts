import { thumbinal } from "./YoutubeResponse";

export type AuthorResponse = {
  kind: string;
  etag: string;
  items: Array<AuthorResponseItem>;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
};

export type AuthorResponseItem = {
  kind: string;
  etag: string;
  id: string;
  snippet: {
    title: string;
    description: string;
    publishedAt: string;
    thumbnails: {
      default: thumbinal;
      medium: thumbinal;
      high: thumbinal;
      standard?: thumbinal;
    };
    localized: {
      title: string;
      description: string;
    };
    country: string;
  };
  statistics: {
    viewCount: string;
    subscriberCount: string;
    hiddenSubscriberCount: boolean;
    videoCount: string;
  };
};

export const defaultAuthorResponse: AuthorResponse = {
  kind: "",
  etag: "",
  items: [],
  pageInfo: {
    totalResults: 0,
    resultsPerPage: 0,
  },
};
