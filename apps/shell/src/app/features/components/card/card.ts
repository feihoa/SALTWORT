import { ChangeDetectionStrategy, Component, inject, input, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { AppItem } from '../../../core/models/app';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.css',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Card {

  private readonly router = inject(Router);

  app = input.required<AppItem>();

  onOpenApp() {
    this.router.navigate([this.app().routePath]);
  }

}
