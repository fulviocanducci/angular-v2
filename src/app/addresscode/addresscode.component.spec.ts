import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddresscodeComponent } from './addresscode.component';

describe('AddresscodeComponent', () => {
  let component: AddresscodeComponent;
  let fixture: ComponentFixture<AddresscodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddresscodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddresscodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
