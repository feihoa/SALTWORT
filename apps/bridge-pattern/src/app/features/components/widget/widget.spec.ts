import { ComponentFixture, TestBed } from '@angular/core/testing';

import { By } from '@angular/platform-browser';
import { Widget } from './widget';

describe('Widget', () => {
  let component: Widget;
  let fixture: ComponentFixture<Widget>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Widget]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Widget, {

    });
    component = fixture.componentInstance;
    fixture.detectChanges();

    const displayedTitle = fixture.debugElement.query(
      By.css('[data-testId="header_title"]')
    );

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
