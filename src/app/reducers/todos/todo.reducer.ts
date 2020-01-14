function TodoReducer(state = {}, action) {

    if(action.type === "TODO_FETCHED"){
        state = {
            ...action.payload
        }
    }
    return state;
}

export default TodoReducer;