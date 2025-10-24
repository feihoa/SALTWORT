import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-error',
  imports: [],
  template: `<p class="text-red-700">{{ message() }}</p>`,
  host: { class: 'block mx-auto my-auto' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Error {
  message = input('Произошла ошибка');
}
