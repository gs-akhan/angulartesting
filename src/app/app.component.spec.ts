import { TestBed, async, fakeAsync, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { provideMockStore, MockStore } from "@ngrx/store/testing";
import { addMatchers, initTestScheduler, cold } from 'jasmine-marbles';
import { Store } from '@ngrx/store';
import { NO_ERRORS_SCHEMA } from '@angular/core';
describe('AppComponent', () => {


  let mockStore: MockStore<any> = null;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      imports: [HttpClientTestingModule],
      declarations: [
        AppComponent
      ],
      providers: [MockStore, provideMockStore({
        initialState: {
          count: 0
        }
      })]
    }).compileComponents();
    mockStore = TestBed.get(Store);
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();

  });

  it(`should have as title 'angulartesting'`, (() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('angulartesting');

    //expect(app.posts.length).toEqual(10);
  }));

  it('should render hello world', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.content').textContent).toContain('hello world 0');
  });

  it("initial count should be zero", () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const app = fixture.debugElement.componentInstance;
    app.increment();
    mockStore.setState({
      count: 1
    });
    expect(app.$count).toBeObservable(cold("a", { a: 1 }));

  });
});
