import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Accordion } from '@features/template-content-projection/accordion/accordion';
import { PageTitle } from '@ui/page-title/page-title';
import { ProjectedContent } from './projected-content/projected-content';
import { Card } from '@features/template-content-projection/card/card';
import { SectionTitle } from '@ui/section-title/section-title';

@Component({
  selector: 'aor-conditional-content',
  imports: [PageTitle, SectionTitle, Accordion, Card, ProjectedContent],
  templateUrl: './conditional-content.html',
  styleUrl: './conditional-content.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConditionalContent {}
