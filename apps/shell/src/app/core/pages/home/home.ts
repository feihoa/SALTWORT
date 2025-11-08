import { ChangeDetectionStrategy, Component, Signal, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { tap } from 'rxjs';
import { Card } from '../../../features/components/card/card';
import { RenderApp } from '../../../features/directives/render-app/render-app';
import { AppItem } from '../../models/app';
import { Apps } from '../../services/apps';

@Component({
  selector: 'app-home',
  imports: [Card, RenderApp],
  templateUrl: './home.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'flex-1 overflow-y-auto p-6' },
})
export class Home {
  apps: Signal<AppItem[]>;
  showBackBtn = signal(false);

  constructor(
    private readonly appsService: Apps,
  ) {
    this.apps = this.appsService.apps;
    this.appsService.loadApps()
      .pipe(takeUntilDestroyed(),
    tap(data => console.log(data)))
      .subscribe(app => this.appsService.updateAppData(app));
  }
}
