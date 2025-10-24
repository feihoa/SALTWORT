import { Component, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  showBackBtn = signal(false);
  name = signal('');
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);

  constructor() {
    this.router.events
      .pipe(
        takeUntilDestroyed(),
        filter(e => e instanceof NavigationEnd))
      .subscribe(e => {
        this.showBackBtn.update(() => e.url !== '/');
        this.name.update(() => this.route.firstChild?.firstChild?.snapshot.data['name'] ?? '');
      })
  }

  navigateBack() {
    this.router.navigate(['/']);
  }
}
