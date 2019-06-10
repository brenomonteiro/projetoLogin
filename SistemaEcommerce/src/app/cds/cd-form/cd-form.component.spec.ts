/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CdFormComponent } from './cd-form.component';

describe('CdFormComponent', () => {
  let component: CdFormComponent;
  let fixture: ComponentFixture<CdFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CdFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CdFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
