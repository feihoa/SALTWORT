import { Injectable } from "@angular/core";
import { delay, Observable, of } from "rxjs";
import { TodoResult } from "../models/todo";

const result: TodoResult = {
  plannedNumber: 10,
  completedNumber: 2,
  date: new Date(),
}

@Injectable({ providedIn: "root" })
export class Todo {

  getResult(): Observable<TodoResult> {
    return of(result).pipe(delay(1000));
  }
}