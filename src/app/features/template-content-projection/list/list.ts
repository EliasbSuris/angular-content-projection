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
  title = input('');
  items = input.required<Item[]>();

  itemTemplate = contentChild('item', { read: TemplateRef });
  emptyTemplate = contentChild('empty', { read: TemplateRef });
}
