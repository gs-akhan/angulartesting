import { Component } from '@angular/core';
import { PostsService } from './posts.service';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angulartesting';
  posts = [];
  public $count;
  constructor(public store: Store<any>, public postService: PostsService) {
    this.$count = this.store.pipe(select("count"));
  }

  public increment() {
    this.store.dispatch({
      type: "ADD"
    });
  }

  public fetchTodo() {
    this.store.dispatch({
      type : "FETCH_TODO"
    });
  }
  ngOnInit() {



  }
}
