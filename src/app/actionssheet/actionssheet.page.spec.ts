import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionssheetPage } from './actionssheet.page';

describe('ActionssheetPage', () => {
  let component: ActionssheetPage;
  let fixture: ComponentFixture<ActionssheetPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActionssheetPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionssheetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
