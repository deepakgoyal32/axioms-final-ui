import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ByNftCountContentComponent } from './by-nft-count-content.component';

describe('ByNftCountContentComponent', () => {
  let component: ByNftCountContentComponent;
  let fixture: ComponentFixture<ByNftCountContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ByNftCountContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ByNftCountContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
