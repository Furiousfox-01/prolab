// src/app/shared/directives/scroll-tracking.directive.ts
import { Directive, HostListener, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appScrollTracking]',
})
export class ScrollTrackingDirective {
  @Output() scrollPosition = new EventEmitter();

  @HostListener('scroll', ['$event'])
  onScroll(event: any) {
    const scrollTop = event.target.scrollTop;
    const scrollHeight = event.target.scrollHeight;
    const offsetHeight = event.target.offsetHeight;
    const scrollPosition = (scrollTop + offsetHeight) / scrollHeight;
    this.scrollPosition.emit(scrollPosition);
  }
}
