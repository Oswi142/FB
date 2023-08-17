import fizzbuzz from "./fizzbuzz";

describe("FizzBuzz", () => {
  it("deberia retornar el numero", () => {
    expect(fizzbuzz(4)).toEqual(4);
  });
  it("deberia retornar el fizz", () => {
    expect(fizzbuzz(3)).toEqual("Fizz");
  });

});
