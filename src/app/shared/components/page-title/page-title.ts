import { Component, input } from '@angular/core';

@Component({
  selector: 'app-page-title',
  imports: [],
  templateUrl: './page-title.html',
  styleUrl: './page-title.scss'
})
export class PageTitle {

  title = input<string>();
  icon = input<string>();

}
