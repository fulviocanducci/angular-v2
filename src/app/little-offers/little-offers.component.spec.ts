import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LittleOffersComponent } from './little-offers.component';

describe('LittleOffersComponent', () => {
  let component: LittleOffersComponent;
  let fixture: ComponentFixture<LittleOffersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LittleOffersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LittleOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
