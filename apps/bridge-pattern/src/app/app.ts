import { ChangeDetectionStrategy, Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { interval, NEVER, of, switchMap } from 'rxjs';
import { TodoComp } from './features/components/todo/todo';
import { WeatherComp } from './features/components/weather/weather';
import { Widget } from './features/components/widget/widget';
import { HoverDirective } from './features/directives/hover';

@Component({
  selector: 'app-root',
  imports: [Widget, WeatherComp, TodoComp, HoverDirective],
  templateUrl: './app.html',
  styleUrl: './app.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App implements OnInit {
  protected readonly title = signal('bridge-pattern');
  private readonly destroyRef = inject(DestroyRef);

  private isHovered = false;

  showTodo = signal(false);

  ngOnInit() {
    interval(7000).pipe(
      takeUntilDestroyed(this.destroyRef),
      switchMap(i => !this.isHovered ? of(i) : NEVER)
    ).subscribe(() => this.showTodo.update(value => !value))

  }

  hoverChanged(isHovered: boolean) {
    this.isHovered = isHovered;
  }

}
