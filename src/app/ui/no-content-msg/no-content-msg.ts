import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'aor-no-content-msg',
  imports: [],
  templateUrl: './no-content-msg.html',
  styleUrl: './no-content-msg.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NoContentMsg {
  message = input('No Content Available!');
}
