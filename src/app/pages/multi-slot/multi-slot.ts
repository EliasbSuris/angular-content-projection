import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Container } from '@features/simple-content-projection/container/container';
import { ProjectedContent } from '@features/simple-content-projection/projected-content/projected-content';
import { PageTitle } from '@ui/page-title/page-title';

@Component({
  selector: 'aor-multi-slot',
  imports: [Container, PageTitle, ProjectedContent],
  templateUrl: './multi-slot.html',
  styleUrl: './multi-slot.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MultiSlot {}
