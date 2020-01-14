import { reducers } from "./index";
describe("Reducer", () => {

    it("Initial Counter state to be Zero", () => {
        var counter = reducers.count(undefined, { type: "noop" });
        expect(counter).toEqual(0);
    });

    it("ADD event should increment the state", () => {
        var counter = reducers.count(0, { type: "ADD" });
        expect(counter).toEqual(1);
    });


});

describe('loadTodoList', () => {


});
