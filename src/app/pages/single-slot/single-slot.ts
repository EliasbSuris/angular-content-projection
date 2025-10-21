import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Container } from '@features/simple-content-projection/container/container';
import { ProjectedContent } from '@features/simple-content-projection/projected-content/projected-content';
import { PageTitle } from '@ui/page-title/page-title';

@Component({
  selector: 'aor-single-slot',
  imports: [Container, PageTitle, ProjectedContent],
  templateUrl: './single-slot.html',
  styleUrl: './single-slot.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SingleSlot {}
