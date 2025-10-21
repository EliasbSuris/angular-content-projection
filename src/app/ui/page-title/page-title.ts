import { Component, input } from '@angular/core';

@Component({
  selector: 'aor-page-title',
  imports: [],
  templateUrl: './page-title.html',
  styleUrl: './page-title.css'
})
export class PageTitle {
  title = input('');
}
