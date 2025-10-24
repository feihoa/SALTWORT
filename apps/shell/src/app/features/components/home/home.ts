import { ChangeDetectionStrategy, Component, signal, WritableSignal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { AppItem } from '../../../core/models/app';
import { Apps } from '../../../core/services/apps';
import { RenderApp } from '../../directives/render-app/render-app';
import { Card } from '../card/card';

@Component({
  selector: 'app-home',
  imports: [Card, RenderApp],
  templateUrl: './home.html',
  styleUrl: './home.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'flex-1 overflow-y-auto p-6' },
})
export class Home {
  apps!: WritableSignal<AppItem[]>;
  showBackBtn = signal(false);

  constructor(
    private readonly appsService: Apps,
  ) {
    this.apps = this.appsService.apps;
    this.appsService.loadApps()
      .pipe(takeUntilDestroyed())
      .subscribe(app => this.appsService.updateAppData(app));
  }
}
