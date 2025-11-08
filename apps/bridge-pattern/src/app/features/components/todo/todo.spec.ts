import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Todo } from '../../../core/services/todo';


describe('Todo', () => {
  let component: Todo;
  let fixture: ComponentFixture<Todo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [Todo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Todo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
