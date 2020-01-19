import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentComponent } from './parent.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ChlildComponent } from '../chlild/chlild.component';
import { MockComponent, MockedComponent, MockRender } from 'ng-mocks';
import { By } from '@angular/platform-browser';

describe('ParentComponent', () => {
  let component: ParentComponent;
  let fixture: ComponentFixture<ParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [],
      declarations: [ParentComponent, MockComponent(ChlildComponent)]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have 4 child components', () => {
    fixture = TestBed.createComponent(ParentComponent);
    fixture.detectChanges();
    let children = fixture.debugElement.queryAll(By.css("app-chlild"));
    expect(children.length).toEqual(4);
  });

});
