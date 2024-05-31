import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

interface field {
  label: string;
  f_type: string;
  active: boolean;
}
@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrl: './field.component.scss',
})
export class FieldComponent {
  @Input() label: string = '';
  @Input() f_type: string = '';
  @Input() active: boolean = true;



}
