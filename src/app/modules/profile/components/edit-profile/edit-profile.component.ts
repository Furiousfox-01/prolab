import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrl: './edit-profile.component.scss'
})
export class EditProfileComponent {
  @Input() profile: any;
  @Output() saveProfile: EventEmitter<any> = new EventEmitter();
  @Output() closeModal: EventEmitter<void> = new EventEmitter<void>();

  onSubmit() {
    this.saveProfile.emit(this.profile);
    this.closeModal.emit();
  }

  closeMod() {
    this.closeModal.emit();
  }
}
