import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import TodoReducer from "./todos/todo.reducer";

export interface State {
  count: number;
  todo : any;
}

export const reducers: ActionReducerMap<State> = {
  count: function(state = 0, action) {
    if (action.type === "ADD") {
      state++;
    }
    return state;
  },
  todo : TodoReducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];


/** 

{
  "userId": 1,
  "id": 1,
  "title": "delectus aut autem",
  "completed": false
}

*/
