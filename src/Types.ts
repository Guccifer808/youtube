export interface InitialState {
    videos: HomePageVideos[];
    currentVideo: CurrentVideo | null;
    searchTerm: string;
    searchResults: [];
    nextPageToken: string | null;
    recommendedVideos: RecommendedVideos[];
}

export interface RecommendedVideos {}
export interface CurrentVideo {}
export interface HomePageVideos {}
