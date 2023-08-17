import fizzbuzz from "./fizzbuzz";

describe("FizzBuzz", () => {
    it("deberia retornar el numero", () => {
      expect(fizzbuzz(3)).toEqual(3);
    });
  });