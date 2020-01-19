import { TestBed, async, fakeAsync, tick } from '@angular/core/testing';
import Effects from "./index.effect";
import { Actions } from '@ngrx/effects';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import { PostsService } from '../posts.service';
import { cold, hot } from "jasmine-marbles";

describe("Testing Todo Effects", () => {

    let effectInstance: Effects;
    let sampleTodo = {
        "userId": 1,
        "id": 1,
        "title": "delectus aut autem",
        "completed": false
    };

    let actions$: Observable<Action>;
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [
                Effects,
                provideMockActions(() => actions$),
                {
                    provide: PostsService,
                    useValue: {
                        getPosts() {
                            return of(sampleTodo)
                        }
                    }
                }
            ]
        });

        effectInstance = TestBed.get(Effects);
    });

    it("Should Initialize", () => {
        expect(effectInstance).toBeTruthy();
    });

    it("Should return proper data", () => {
        actions$ = cold("a", { a: { type: "FETCH_TODO" } });
        let expected = cold("c", {
            c: {
                type: "TODO_FETCHED",
                payload: sampleTodo
            }
        });
        expect(effectInstance.loadTodos$).toBeObservable(expected);
    });

})