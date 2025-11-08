import { Component, inject } from '@angular/core';
import { FormArray, FormControl, FormGroup, NonNullableFormBuilder, ReactiveFormsModule } from '@angular/forms';

type FormAnswer = FormGroup<{ text: FormControl<string> }>;

type FormQuestion = FormGroup<{
  questionName: FormControl<string>;
  answers: FormArray<FormAnswer>;
}>

type Form = FormGroup<{
  questions: FormArray<FormQuestion>;
}>

@Component({
  selector: 'app-quiz-form',
  imports: [ReactiveFormsModule],
  templateUrl: './quiz-form.html',
  styleUrl: './quiz-form.scss',
})
export class QuizForm {
  private readonly fb = inject(NonNullableFormBuilder);

  form: Form = this.fb.group({
    questions: this.fb.array<FormQuestion>([this.#generateQuestion()]),
  })

  #generateQuestion(): FormQuestion {
    return this.fb.group({
      questionName: '',
      answers: this.fb.array<FormAnswer>([]),
    })
  }

  #generateAnswer(): FormAnswer {
    return this.fb.group({
      text: '',
    })
  }

  onSubmit() {
    console.log(this.form.value);
  }

  addQuestion(): void {
    this.form.controls.questions.push(this.#generateQuestion());
  }

  removeQuestion(questionIndex: number): void {
    this.form.controls.questions.removeAt(questionIndex);
  }

  addAnswer(questionIndex: number): void {
    this.form.controls.questions.at(questionIndex).controls.answers.push(this.#generateAnswer());
  }

  removeAnswer(questionIndex: number, answerIndex: number): void {
    this.form.controls.questions.at(questionIndex).controls.answers.removeAt(answerIndex);
  }

}
