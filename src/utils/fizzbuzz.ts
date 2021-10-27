export function fizzBuzz(n: number): number | string {
  if (n % 5 === 0 && n % 3 === 0) {
    return "FizzBuzz";
  } else if (n % 3 === 0) {
    return "Fizz";
  } else if (n % 5 === 0) {
    return "Buzz";
  } else {
    return n;
  }
}
