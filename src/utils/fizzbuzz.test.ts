import { fizzBuzz } from "./fizzbuzz";

test("numbers divisible by both 3 and 5", () => {
  expect(fizzBuzz(15)).toBe("FizzBuzz");
  expect(fizzBuzz(30)).toBe("FizzBuzz");
  expect(fizzBuzz(45)).toBe("FizzBuzz");
});

test("numbers divisible by 3 only", () => {
  expect(fizzBuzz(3)).toBe("Fizz");
  expect(fizzBuzz(6)).toBe("Fizz");
  expect(fizzBuzz(9)).toBe("Fizz");
});

test("numbers divisible by 5 only", () => {
  expect(fizzBuzz(5)).toBe("Buzz");
  expect(fizzBuzz(10)).toBe("Buzz");
  expect(fizzBuzz(20)).toBe("Buzz");
});

test("numbers not divisible by neither 3 nor 5", () => {
  expect(fizzBuzz(13)).toBe(13);
  expect(fizzBuzz(19)).toBe(19);
  expect(fizzBuzz(29)).toBe(29);
});
