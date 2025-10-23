import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'aor-page-title',
  imports: [],
  templateUrl: './page-title.html',
  styleUrl: './page-title.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageTitle {
  readonly title = input('');
}
