import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from './components/navbar/navbar.component';
import { HighlightDirective } from './directives/highlight.directive';
import { DebounceClickDirective } from './directives/debounce-click.directive';
import { AutoFocusDirective } from './directives/autofocus.directive';
import { ScrollTrackingDirective } from './directives/scroll-tracking.directive';
import { Button3DComponent } from './components/button-3-d/button-3-d.component';
@NgModule({
  declarations: [NavbarComponent, HighlightDirective, DebounceClickDirective, AutoFocusDirective, ScrollTrackingDirective, Button3DComponent],
  imports: [CommonModule],
  exports: [NavbarComponent, HighlightDirective, DebounceClickDirective, AutoFocusDirective, ScrollTrackingDirective, Button3DComponent],
})
export class SharedModule {}
