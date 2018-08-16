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

   /* window['reframe']  = function reframe(target, cName) {
      var frames = typeof target === 'string' ? document.querySelectorAll(target) : target;
      var c = cName || 'js-reframe';
      if (!('length' in frames)) frames = [frames];
      for (var i = 0; i < frames.length; i += 1) {
        var frame = frames[i];
        var hasClass = frame.className.split(' ').indexOf(c) !== -1;
        if (hasClass) return;
        var hAttr = frame.getAttribute('height');
        var wAttr = frame.getAttribute('width');
        if (wAttr.indexOf('%') > -1 || frame.style.width.indexOf('%') > -1) return;
        var h = hAttr ? hAttr : frame.offsetHeight;
        var w = wAttr ? wAttr : frame.offsetWidth;
        var padding = h / w * 100;
        var div = document.createElement('div');
        div.className = c;
        var divStyles = div.style;
        divStyles.position = 'relative';
        divStyles.width = '100%';
        divStyles.paddingTop = padding + '%';
        var frameStyle = frame.style;
        frameStyle.position = 'absolute';
        frameStyle.width = '100%';
        frameStyle.height = '100%';
        frameStyle.left = '0';
        frameStyle.top = '0';
        frame.parentNode.insertBefore(div, frame);
        frame.parentNode.removeChild(frame);
        div.appendChild(frame);
      }
    }*/


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
