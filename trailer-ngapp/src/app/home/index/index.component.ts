import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import {
  ActionIndexRetrieve,
  selectorTrailerResults
} from './index.reducer';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit, OnDestroy {
  private unsubscribe$: Subject<void> = new Subject<void>();

  initialized;
  result;

  constructor(public store: Store<any>) {}

  ngOnInit() {
    this.initialized = false;
    this.store
      .select(selectorTrailerResults)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((result: any) => {
        this.result = result;

        if (!this.initialized) {
          this.initialized = true;
          this.store.dispatch(
            new ActionIndexRetrieve({ query: result.query })
          );
        }
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  onSearchChange(query: string) {
    if (query) {
      this.store.dispatch(new ActionIndexRetrieve({ query }));
    }
  }
}
