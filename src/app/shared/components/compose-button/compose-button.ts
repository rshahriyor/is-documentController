import { Component, signal } from '@angular/core';
import { ComposeModal } from "../compose-modal/compose-modal";

@Component({
  selector: 'app-compose-button',
  imports: [ComposeModal],
  templateUrl: './compose-button.html',
  styleUrl: './compose-button.scss'
})
export class ComposeButton {
  showComposeModal = signal(false);

}
