import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChlildComponent } from './chlild.component';

describe('ChlildComponent', () => {
  let component: ChlildComponent;
  let fixture: ComponentFixture<ChlildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ChlildComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChlildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should behave...', () => {
    expect("name").toBe("name");
  });
});
