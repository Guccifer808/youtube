export interface InitialState {
    videos: HomepageVideos[];
    currentVideo: CurrentVideo | null;
    searchTerm: string;
    searchResults: [];
    nextPageToken: string | null;
    recommendedVideos: RecommendedVideos[];
}

export interface RecommendedVideos {
    videoId: string;
    videoTitle: string;
    videoThumbnail: string;
    videoDuration: string;
    videoViews: string;
    videoAge: string;
    channelInfo: {
      id: string;
      name: string;
    };
}
export interface CurrentVideo {
    videoId: string;
    videoTitle: string;
    videoDescription: string;
    videoViews: string;
    videoLikes: string;
    videoAge: string;
    channelInfo: {
      id: string;
      image: string;
      name: string;
      subscribers: string;
    };
}
export interface HomepageVideos {    
    videoId: string;
    videoThumbnail: string; //if err place it before Duration
    videoTitle: string;
    videoDescription: string;
    videoLink: string;
    videoDuration: string;
    videoViews: string;
    videoAge: string;
    channelInfo: {
        id: string;
        image: string;
        name: string;
    }}

export interface Item {
    snippet: {
        title: string;
        thumbnails: { medium: { url: string } };
        publishedAt: Date;
        channelTitle: string;
        channelId: string;
    };
    contentDetails: { upload: { videoId: string } };
    }
