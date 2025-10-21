import { NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, input, TemplateRef } from '@angular/core';
import { NoContentMsg } from '@ui/no-content-msg/no-content-msg';
import { SectionContainer } from '@ui/section-container/section-container';
import { SectionTitle } from '@ui/section-title/section-title';

@Component({
  selector: 'aor-container',
  imports: [SectionTitle, SectionContainer, NoContentMsg, NgTemplateOutlet],
  templateUrl: './container.html',
  styleUrl: './container.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Container {
  title = input('Default Container Title');
  example = input<TemplateRef<unknown>>();
}
