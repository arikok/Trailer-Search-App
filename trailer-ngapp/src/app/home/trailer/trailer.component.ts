import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-trailer',
  templateUrl: './trailer.component.html',
  styleUrls: ['./trailer.component.scss']
})
export class TrailerComponent implements OnInit, OnDestroy {
  private unsubscribe$: Subject<void> = new Subject<void>();

  initialized;
  reframed;
  videoDetails;
  YoutubeVideoId;
  Title;
  ChannelTitle;
  Description;
  ThumbnailUrl;
  player;

  constructor(public store: Store<any>, private route: ActivatedRoute) { }

  init() {
  }

  ngOnInit() {
    this.initialized = false;
    this.reframed = false;
    this.route.params.subscribe(params => {
      this.init();
      this.YoutubeVideoId = params['YoutubeVideoId'];
      this.initialized = true;
    });

    this.route.queryParams.subscribe(params => {
      // Defaults to 0 if no query param provided.
      if (params['Title']) {
        this.Title = params['Title'];
        this.ChannelTitle = params['ChannelTitle'];
        this.Description = params['Description'];
        this.ThumbnailUrl = params['ThumbnailUrl'];
      }

    });
  }

  savePlayer(player) {
    this.player = player;
    console.log('player instance', player)
    this.player.playVideo();

  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
