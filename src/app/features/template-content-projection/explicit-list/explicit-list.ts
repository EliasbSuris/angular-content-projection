import { NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, contentChildren, input, TemplateRef } from '@angular/core';
import { DefListItem } from './def-list-item';

@Component({
  selector: 'aor-explicit-list',
  imports: [NgTemplateOutlet],
  templateUrl: './explicit-list.html',
  styleUrl: './explicit-list.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExplicitList {
  title = input('');
  titleDef = input('');
  itemsDef = contentChildren(DefListItem, { read: TemplateRef });
}
