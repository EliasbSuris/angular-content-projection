import { NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, contentChild, input, signal, TemplateRef } from '@angular/core';
import { NzButtonComponent } from 'ng-zorro-antd/button';

@Component({
  selector: 'aor-accordion',
  imports: [NzButtonComponent, NgTemplateOutlet],
  templateUrl: './accordion.html',
  styleUrl: './accordion.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Accordion {
  readonly title = input('');
  readonly isOpen = signal(true);

  readonly contentTemplate = contentChild('content', { read: TemplateRef });

  toggleContent() {
    this.isOpen.update(open => !open);
  }
}
