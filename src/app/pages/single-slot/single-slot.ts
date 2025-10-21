import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PageTitle } from '@ui/page-title/page-title';
import { Container } from './container/container';
import { ProjectedContent } from './projected-content/projected-content';

@Component({
  selector: 'aor-single-slot',
  imports: [Container, PageTitle, ProjectedContent],
  templateUrl: './single-slot.html',
  styleUrl: './single-slot.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SingleSlot {}
