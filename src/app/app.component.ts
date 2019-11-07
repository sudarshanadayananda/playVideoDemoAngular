import { Component, ElementRef, Renderer } from '@angular/core';
import * as Plyr from 'plyr'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  player: any;
  constructor (private elementRef: ElementRef,  private renderer: Renderer) {
    
  }

  ngOnInit() {
    this.player = new Plyr('#player');
    this.autoPlayInFullScreen();
  }

  playFullScreen(): void {
    this.player.play();
    this.player.fullscreen.enter();
  }

  autoPlayInFullScreen(): void {
    this.renderer.setElementStyle(this.elementRef.nativeElement.querySelector('#player'), 'height', window.innerHeight + 'px');
    this.renderer.setElementStyle(this.elementRef.nativeElement.querySelector('#player'), 'width', window.innerWidth + 'px');
  }
}
