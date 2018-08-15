import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { TrailerSearchResult } from './index.reducer';

const PROXY_URL = 'http://localhost:49238/youtube/homepage';

@Injectable()
export class IndexService {
  constructor(private httpClient: HttpClient) {}

  retrieveResult(symbol: string): Observable<TrailerSearchResult> {
    return this.httpClient
      .post(PROXY_URL,'')
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
