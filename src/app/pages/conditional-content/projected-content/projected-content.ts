import { afterNextRender, ChangeDetectionStrategy, Component, DestroyRef, inject, input } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'aor-projected-content',
  imports: [],
  templateUrl: './projected-content.html',
  styleUrl: './projected-content.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectedContent {
  readonly #destroyRef = inject(DestroyRef);
  readonly #nzMessage = inject(NzMessageService);

  readonly name = input('ProjectedContent');

  constructor() {
    afterNextRender(() => {
      console.log('ProjectedContent created');
      this.#nzMessage.success(`${this.name()} component has been created!`);
    });
    this.#destroyRef.onDestroy(() => {
      console.log('ProjectedContent destroyed');
      this.#nzMessage.warning(`${this.name()} component has been destroyed!`);
    });
  }
}
