import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button-3D',
  templateUrl: './button-3-d.component.html',
  styleUrl: './button-3-d.component.scss',
})
export class Button3DComponent {
  @Input() btnTxt: string = '';
  @Output() actions = new EventEmitter();

  clicked() {
    this.actions.emit('clicked');
  }
}
