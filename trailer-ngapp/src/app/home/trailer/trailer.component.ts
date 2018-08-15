import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

/*import {
  ActionIndexRetrieve,
  selectorTrailerResults
} from './index.reducer';*/

@Component({
  selector: 'app-trailer',
  templateUrl: './trailer.component.html',
  styleUrls: ['./trailer.component.scss']
})
export class TrailerComponent implements OnInit, OnDestroy {
  private unsubscribe$: Subject<void> = new Subject<void>();

  initialized;
  videoDetails;
  videoId;
  videoTitle;
  channelTitle;
  player;
  
  constructor(public store: Store<any>, private route: ActivatedRoute) { }

  ngOnInit() {
    this.initialized = false;
    this.route.params.subscribe(params => {
      this.videoId = params['id']; 
      // In a real app: dispatch action to load the details here.

      window['onYouTubeIframeAPIReady'] = (e) => {
        this.player = new window['YT'].Player('player', {
          videoId: this.videoId
        });
      };


    });


    /*this.store
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
      });*/
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  /*onSearchChange(query: string) {
    this.store.dispatch(new ActionIndexRetrieve({ query }));
  }*/
}
