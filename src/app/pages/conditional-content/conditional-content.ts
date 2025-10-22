import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Accordion } from '@features/template-content-projection/accordion/accordion';
import { PageTitle } from '@ui/page-title/page-title';
import { ProjectedContent } from './projected-content/projected-content';

@Component({
  selector: 'aor-conditional-content',
  imports: [PageTitle, Accordion, ProjectedContent],
  templateUrl: './conditional-content.html',
  styleUrl: './conditional-content.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConditionalContent {}
