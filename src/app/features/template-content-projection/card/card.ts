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
  titleContent = contentChild('title', { read: TemplateRef });
  titleDirective = contentChild(CardTitle, { read: TemplateRef });
  titleTemplate = input<TemplateRef<unknown>>();
  title = input<string>();
  protected hasTitle = computed(
    () => !!this.title() || !!this.titleTemplate() || !!this.titleDirective() || !!this.titleContent()
  );
  footerContent = contentChild('footer', { read: TemplateRef });
  footerDirective = contentChild(CardFooter, { read: TemplateRef });
  protected hasFooter = computed(() => !!this.footerDirective() || !!this.footerContent());
}
