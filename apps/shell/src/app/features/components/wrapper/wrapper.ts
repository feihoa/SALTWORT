import { Component, input } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { AppItem } from '../../../core/models/app';

@Component({
  selector: 'app-wrapper',
  imports: [RouterOutlet, RouterModule],
  template: `
    <div class="wrapper fixed top-[73px] left-0 z-10 p-5 bg-white rounded-lg shadow-lg">
      <router-outlet></router-outlet>
    </div>
  `,
  styles: []
})
export class Wrapper {

  app = input<AppItem>();

}
