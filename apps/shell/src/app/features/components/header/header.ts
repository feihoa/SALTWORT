import { Component, inject, Signal, signal } from '@angular/core';
import { takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map, tap } from 'rxjs';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  showBackBtn: Signal<boolean | undefined>;
  name = signal('');
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);

  constructor() {
    this.showBackBtn = toSignal(this.router.events
      .pipe(
        takeUntilDestroyed(),
        filter(e => e instanceof NavigationEnd),
        map(e => e.url !== '/'),
        tap(() => this.name.update(() => this.route.firstChild?.firstChild?.snapshot?.data?.['name'] ?? '')),
      ), { initialValue: false })
  }

  navigateBack() {
    this.router.navigate(['/']);
  }
}
