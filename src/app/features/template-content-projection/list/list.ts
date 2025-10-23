import { NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, contentChild, input, TemplateRef } from '@angular/core';

export interface Item {
  id: number;
  title: string;
  description: string;
}

@Component({
  selector: 'aor-list',
  imports: [NgTemplateOutlet],
  templateUrl: './list.html',
  styleUrl: './list.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class List {
  readonly title = input('');
  readonly items = input.required<Item[]>();

  readonly itemTemplate = contentChild('item', { read: TemplateRef });
  readonly emptyTemplate = contentChild('empty', { read: TemplateRef });
}
