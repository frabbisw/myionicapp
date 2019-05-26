import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TadaaPage } from './tadaa.page';

describe('TadaaPage', () => {
  let component: TadaaPage;
  let fixture: ComponentFixture<TadaaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TadaaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TadaaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
