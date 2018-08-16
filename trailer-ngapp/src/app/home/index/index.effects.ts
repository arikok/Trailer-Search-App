import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import {
  tap,
  map,
  debounceTime,
  distinctUntilChanged,
  switchMap,
  catchError
} from 'rxjs/operators';

import { LocalStorageService } from '@app/core';

import {
  ActionIndexRetrieve,
  ActionIndexRetrieveError,
  ActionIndexRetrieveSuccess,
  TRAILER_RESULT_KEY,
  IndexActionTypes
} from './index.reducer';
import { IndexService } from './index.service';

@Injectable()
export class IndexEffects {
  constructor(
    private actions$: Actions<Action>,
    private localStorageService: LocalStorageService,
    private service: IndexService
  ) {}

  @Effect()
  retrieveResult() {
    return this.actions$.pipe(
      ofType<ActionIndexRetrieve>(IndexActionTypes.RETRIEVE),
      tap(action =>
        this.localStorageService.setItem(TRAILER_RESULT_KEY, {
          query: action.payload.query
        })
      ),
      distinctUntilChanged(),
      debounceTime(500),
      switchMap((action: ActionIndexRetrieve) =>
        this.service
          .retrieveResult(action.payload.query, action.payload.nextPageToken)
          .pipe(
          map(result => new ActionIndexRetrieveSuccess({ result : result, nextPageToken : action.payload.nextPageToken })),
            catchError(error =>
              of(new ActionIndexRetrieveError({ error }))
            )
          )
      )
    );
  }
}
