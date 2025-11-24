import { Location } from '@angular/common';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-back',
  imports: [],
  templateUrl: './back.html',
  styleUrl: './back.scss'
})
export class Back {

  private location = inject(Location);

  goBack(): void {
    this.location.back();
  }

}
