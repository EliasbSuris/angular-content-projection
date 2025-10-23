import { NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, contentChild, input, TemplateRef } from '@angular/core';
import { CardTitle } from './card-title';
import { CardFooter } from './card-footer';

@Component({
  selector: 'aor-card',
  imports: [NgTemplateOutlet],
  templateUrl: './card.html',
  styleUrl: './card.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Card {
  readonly isCompact = input(false);
  readonly bodyContent = contentChild('body', { read: TemplateRef });

  readonly titleContent = contentChild('title', { read: TemplateRef });
  readonly titleDirective = contentChild(CardTitle, { read: TemplateRef });
  readonly titleTemplate = input<TemplateRef<unknown>>();
  readonly title = input<string>();
  protected readonly hasTitle = computed(
    () => !!this.title() || !!this.titleTemplate() || !!this.titleDirective() || !!this.titleContent()
  );

  readonly footerContent = contentChild('footer', { read: TemplateRef });
  readonly footerDirective = contentChild(CardFooter, { read: TemplateRef });
  protected readonly hasFooter = computed(() => !!this.footerDirective() || !!this.footerContent());
}
