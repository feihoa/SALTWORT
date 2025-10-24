import { Component, DestroyRef, inject, signal, WritableSignal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { tap } from 'rxjs';
import { Period } from '../../../core/models/weather';
import { IWidget } from '../../../core/models/widget';
import { Weather } from '../../../core/services/weather';
import { WIDGET } from '../../../core/tokens/widget';

@Component({
  selector: 'app-weather',
  imports: [],
  templateUrl: './weather.html',
  styleUrl: './weather.css',
  providers: [{
    provide: WIDGET,
    useExisting: WeatherComp,
  }]
})
export class WeatherComp implements IWidget {

  private readonly weather = inject(Weather);
  private readonly destroyRef = inject(DestroyRef);

  period: WritableSignal<Period | null> = signal(null);
  isLoading = signal(false);

  load() {
    this.isLoading.update(() => true);
    this.weather.getForcast()
      .pipe(
        takeUntilDestroyed(this.destroyRef),
        tap(() => this.isLoading.update(() => false))
      ).subscribe(w => this.period.set(w))
  }

  refresh() {
    this.load();
  }
}
