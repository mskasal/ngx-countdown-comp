import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountDownBarComponent } from './count-down-bar.component';

describe('CountDownBarComponent', () => {
  let component: CountDownBarComponent;
  let fixture: ComponentFixture<CountDownBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountDownBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountDownBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
