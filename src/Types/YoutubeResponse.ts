type YTResponseTypes = {
  kind: string;
  nextPageToken: string;
  prevPageToken: string | undefined;
  items: Array<YTItems>;
  etag: string;
  pageInfo: PageInfo;
  regionCode: string;
};

type PageInfo = {
  totalResults: number;
  resultsPerPage: number;
};

export type YTItems = {
  kind: string;
  etag: string;
  id: {
    kind: string;
    videoId: string;
  };
  snippet: {
    publishedAt: string;
    liveBroadcastContent: string;
    publishTime: string;
    channelId: string;
    channelTitle: string;
    description: string;
    thumbnails: {
      default: thumbinal;
      medium: thumbinal;
      high: thumbinal;
    };
    title: string;
  };
};

export type thumbinal = {
  url: string;
  width: number;
  height: number;
};

export const defaultYTResponse: YTResponseTypes = {
  kind: "",
  nextPageToken: "",
  prevPageToken: "",
  etag: "",
  items: [],
  regionCode: "",
  pageInfo: {
    totalResults: 0,
    resultsPerPage: 0,
  },
};

export default YTResponseTypes;
