import reducer from "./todo.reducer";

describe("Todo Reducer", () => {
    it("Testing Initial State", () => {
        let a = reducer(undefined, { type: "noop", payload: 10 });
        expect(a).toEqual({});
    });

    it("Testing Todo Fetched State", () => {
        let sampleTodo = {
            "userId": 1,
            "id": 1,
            "title": "delectus aut autem",
            "completed": false
        };
        let a = reducer(undefined, { type: "TODO_FETCHED", payload: sampleTodo });
        expect(a).toEqual(sampleTodo);
    });

    it("Testing No Update State", () => {
        let sampleTodo = {
            "userId": 1,
            "id": 1,
            "title": "delectus aut autem",
            "completed": false
        };
        let a = reducer(sampleTodo, { type: "NOOP", payload: sampleTodo });
        expect(a).toEqual(sampleTodo);
    });

}); 