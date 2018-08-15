import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const BASE_URL = 'http://localhost:49238';
const SEARCH_URL = BASE_URL + '/youtube/search';
const RELATED_URL = BASE_URL + '/youtube/related';

@Injectable()
export class VideoService {
  constructor(private httpClient: HttpClient) {}

  retrieveSearchResult(query: string, nextPageToken: string): Observable<TrailerSearchResult> {
    return this.httpClient
      .post(SEARCH_URL, {
        "Query": query,
        "NextPageToken": nextPageToken
      })
      .pipe(
      map((res: any) => ({
        query: res.dataObject.Query,
        nextPageToken: res.dataObject.NextPageToken,
        hasNext: res.dataObject.HasNext,
        trailers: res.dataObject.Videos
        }))
      );
  }

  retrieveRelatedVideos(relatedToVideoId: string,nextPageToken : string): Observable<TrailerSearchResult> {
    return this.httpClient
      .post(RELATED_URL, {
        "RelatedToVideoId": relatedToVideoId,
        "NextPageToken" : nextPageToken
      })
      .pipe(
        map((res: any) => ({
          query: res.dataObject.Query,
          nextPageToken: res.dataObject.NextPageToken,
          hasNext: res.dataObject.HasNext,
          trailers: res.dataObject.Videos
        }))
      );
  }
}

export interface TrailerSearchResult {
  query: string;
  nextPageToken: string;
  hasNext: string;
  trailers: TrailerSearchResultItem[];
}

export interface TrailerSearchResultItem {
  Title: string;
  YoutubeVideoID: string;
  ChannelTitle: string;
  ChannelId: string;
  ThumbnailUrl: string;
}
