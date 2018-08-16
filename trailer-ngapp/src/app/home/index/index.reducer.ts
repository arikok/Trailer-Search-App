import { Action } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';

export const TRAILER_RESULT_KEY = 'HOME.RESULT';

export enum IndexActionTypes {
  RETRIEVE = '[Index] Retrieve',
  RETRIEVE_SUCCESS = '[Index] Retrieve Success',
  RETRIEVE_ERROR = '[Index] Retrieve Error'
}

export class ActionIndexRetrieve implements Action {
  readonly type = IndexActionTypes.RETRIEVE;

  constructor(readonly payload: { query: string,nextPageToken : string }) {}
}

export class ActionIndexRetrieveSuccess implements Action {
  readonly type = IndexActionTypes.RETRIEVE_SUCCESS;

  constructor(readonly payload: { result: TrailerSearchResult, nextPageToken : string }) {}
}

export class ActionIndexRetrieveError implements Action {
  readonly type = IndexActionTypes.RETRIEVE_ERROR;

  constructor(readonly payload: { error: HttpErrorResponse }) {}
}

export type IndexActions =
  | ActionIndexRetrieve
  | ActionIndexRetrieveSuccess
  | ActionIndexRetrieveError;

export const initialState: IndexState = {
  query: '',
  loading: false,
  trailers : null
};

export const selectorTrailerResults = state => state.home.result;

export function indexReducer(
  state: IndexState = initialState,
  action: IndexActions
): IndexState {
  switch (action.type) {
    case IndexActionTypes.RETRIEVE:
      return {
        ...state,
        loading: true,
        error: null,
        query: action.payload.query
      };

    case IndexActionTypes.RETRIEVE_SUCCESS:
      let trailers = [];
      if (action.payload.nextPageToken == '') {
        trailers = action.payload.result.trailers;
      } else {
        trailers = state.trailers.concat(action.payload.result.trailers);
      }
      return {
        ...state,
        loading: false,
        trailers: trailers,
        result: action.payload.result,
        error: null
      };

    case IndexActionTypes.RETRIEVE_ERROR:
      return {
        ...state,
        loading: false,
        result: null,
        error: action.payload.error
      };

    default:
      return state;
  }
}

export interface TrailerSearchResult {
  query: string;
  nextPageToken: string;
  hasNext: string;
  trailers: TrailerSearchResultItem[]
}

export interface TrailerSearchResultItem {
  Title: string;
  YoutubeVideoId: string;
  ChannelTitle: string;
  ChannelId: string;
  ThumbnailUrl: string;
  Description: string;
}

export interface IndexState {
  query: string;
  loading: boolean;
  result?: TrailerSearchResult;
  trailers?: TrailerSearchResultItem[];
  error?: HttpErrorResponse;
}
