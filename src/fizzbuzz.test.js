import fizzbuzz from "./fizzbuzz";

describe("FizzBuzz", () => {

  it("deberia retornar el numero", () => {
    expect(fizzbuzz(4)).toEqual(4);
  });

  it("deberia retornar el fizz", () => {
    expect(fizzbuzz(3)).toEqual("Fizz");
  });

  it("deberia retornar el buzz", () => {
    expect(fizzbuzz(5)).toEqual("Buzz");
  });
  
  it("deberia retornar el fizzbuzz", () => {
    expect(fizzbuzz(15)).toEqual("FizzBuzz");
  });

});
