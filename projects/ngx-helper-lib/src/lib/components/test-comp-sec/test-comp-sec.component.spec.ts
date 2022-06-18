import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestCompSecComponent } from './test-comp-sec.component';

describe('TestCompSecComponent', () => {
  let component: TestCompSecComponent;
  let fixture: ComponentFixture<TestCompSecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestCompSecComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestCompSecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
