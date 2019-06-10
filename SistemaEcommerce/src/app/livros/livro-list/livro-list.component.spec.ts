/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LivroListComponent } from './livro-list.component';

describe('LivroListComponent', () => {
  let component: LivroListComponent;
  let fixture: ComponentFixture<LivroListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LivroListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LivroListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
