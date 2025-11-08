import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-wrapper',
  imports: [RouterOutlet, RouterModule],
  template: `
    <div class="wrapper fixed top-[73px] left-0 z-10 p-5 bg-white rounded-lg shadow-lg">
      <router-outlet></router-outlet>
    </div>
  `,
})
export class Wrapper {

}
