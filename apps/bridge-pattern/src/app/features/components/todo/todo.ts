import { DatePipe } from '@angular/common';
import { Component, computed, DestroyRef, inject, signal, WritableSignal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { delay, tap } from 'rxjs';
import { TodoResult } from '../../../core/models/todo';
import { IWidget } from '../../../core/models/widget';
import { Todo } from '../../../core/services/todo';
import { WIDGET } from '../../../core/tokens/widget';

@Component({
  selector: 'app-todo',
  imports: [DatePipe],
  templateUrl: './todo.html',
  styleUrl: './todo.css',
  providers: [{
    provide: WIDGET,
    useExisting: TodoComp,
  }]
})
export class TodoComp implements IWidget {

  private readonly todo = inject(Todo);
  private readonly destroyRef = inject(DestroyRef);

  result: WritableSignal<TodoResult | null> = signal(null);
  progress = computed(() => {
    const r = this.result();
    if (!r || r.plannedNumber === 0) return 0;
    return Math.floor((r.completedNumber / r.plannedNumber) * 100);
  });
  isLoading = signal(false);

  load() {
    this.isLoading.update(() => true);
    this.todo.getResult()
      .pipe(takeUntilDestroyed(this.destroyRef),
        delay(2000),
        tap(() => this.isLoading.update(() => false)))
      .subscribe(res => this.result.set(res))
  }

  refresh() {
    this.load();
  }

}
