import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'aor-section-title',
  imports: [],
  templateUrl: './section-title.html',
  styleUrl: './section-title.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SectionTitle {
  readonly title = input('');
}
