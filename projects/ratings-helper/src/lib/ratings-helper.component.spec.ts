import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingsHelperComponent } from './ratings-helper.component';

describe('RatingsHelperComponent', () => {
  let component: RatingsHelperComponent;
  let fixture: ComponentFixture<RatingsHelperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RatingsHelperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RatingsHelperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
