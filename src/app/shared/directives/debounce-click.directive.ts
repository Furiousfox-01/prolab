import {
  Directive,
  EventEmitter,
  HostListener,
  OnInit,
  Output,
} from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Directive({
  selector: '[appDebounceClick]',
})
export class DebounceClickDirective implements OnInit {
  @Output() debounceClick = new EventEmitter();
  private clicks = new Subject();
  private subscription!: Subscription;

  constructor() {}

  ngOnInit() {
    this.subscription = this.clicks
      .pipe(debounceTime(500))
      .subscribe((e) => this.debounceClick.emit(e));
  }

  @HostListener('click', ['$event'])
  clickEvent(event: any) {
    event.preventDefault();
    event.stopPropagation();
    this.clicks.next(event);
  }
}
