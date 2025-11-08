import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { QuizForm } from './quiz-form/quiz-form';

@Component({
  selector: 'app-root',
  imports: [QuizForm],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  protected readonly title = signal('forms');
}
