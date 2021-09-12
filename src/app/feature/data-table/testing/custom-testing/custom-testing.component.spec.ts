import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomTestingComponent } from './custom-testing.component';

describe('CustomTestingComponent', () => {
  let component: CustomTestingComponent;
  let fixture: ComponentFixture<CustomTestingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomTestingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomTestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
