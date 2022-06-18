import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxHelperLibComponent } from './ngx-helper-lib.component';

describe('NgxHelperLibComponent', () => {
  let component: NgxHelperLibComponent;
  let fixture: ComponentFixture<NgxHelperLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxHelperLibComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxHelperLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
