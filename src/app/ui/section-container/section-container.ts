import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'aor-section-container',
  imports: [],
  templateUrl: './section-container.html',
  styleUrl: './section-container.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SectionContainer {
  readonly title = input('');
}
