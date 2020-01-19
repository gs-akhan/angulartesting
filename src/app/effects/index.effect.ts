import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { HttpClient } from '@angular/common/http';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { PostsService } from '../posts.service';

@Injectable()
class TodoEffects {
    loadTodos$ = createEffect(() => this.actions$.pipe(
        ofType("FETCH_TODO"),
        mergeMap(
            () => this.postService.getPosts()
                .pipe(
                    map(todo => ({ type: "TODO_FETCHED", payload: todo }))
                )
        )
    ));

    constructor(private actions$: Actions,
        private http: HttpClient,
        private postService: PostsService) {

    }
}

export default TodoEffects;