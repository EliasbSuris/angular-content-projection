import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { DefListItem } from '@features/template-content-projection/explicit-list/def-list-item';
import { ExplicitList } from '@features/template-content-projection/explicit-list/explicit-list';
import { ListItem } from '@features/template-content-projection/explicit-list/list-item/list-item';
import { Item, List } from '@features/template-content-projection/list/list';
import { PageTitle } from '@ui/page-title/page-title';

@Component({
  selector: 'aor-template-context',
  imports: [List, ExplicitList, ListItem, DefListItem, PageTitle],
  templateUrl: './template-context.html',
  styleUrl: './template-context.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TemplateContext {
  items = signal<Item[]>([
    { id: 1, title: 'Item 1', description: 'Description for Item 1' },
    { id: 2, title: 'Item 2', description: 'Description for Item 2' },
    { id: 3, title: 'Item 3', description: 'Description for Item 3' }
  ]);
}
