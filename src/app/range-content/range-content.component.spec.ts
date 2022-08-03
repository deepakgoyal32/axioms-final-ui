import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RangeContentComponent } from './range-content.component';

describe('RangeContentComponent', () => {
  let component: RangeContentComponent;
  let fixture: ComponentFixture<RangeContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RangeContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RangeContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
