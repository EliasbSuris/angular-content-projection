import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Card } from '@features/template-content-projection/card/card';
import { CardFooter } from '@features/template-content-projection/card/card-footer';
import { CardTitle } from '@features/template-content-projection/card/card-title';
import { PageTitle } from '@ui/page-title/page-title';
import { SectionTitle } from '@ui/section-title/section-title';

@Component({
  selector: 'aor-content-child-template',
  imports: [PageTitle, Card, SectionTitle, CardTitle, CardFooter],
  templateUrl: './content-child-template.html',
  styleUrl: './content-child-template.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContentChildTemplate {}
