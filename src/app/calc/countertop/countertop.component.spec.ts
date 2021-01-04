import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountertopComponent } from './countertop.component';

describe('CountertopComponent', () => {
  let component: CountertopComponent;
  let fixture: ComponentFixture<CountertopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountertopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountertopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
