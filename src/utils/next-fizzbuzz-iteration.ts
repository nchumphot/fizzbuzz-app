export function nextFizzBuzzInteration(
  arr: (number | string)[]
): (number | string)[] {
  if ((arr.length + 1) % 5 === 0 && (arr.length + 1) % 3 === 0) {
    return [...arr, "FizzBuzz"];
  } else if ((arr.length + 1) % 3 === 0) {
    return [...arr, "Fizz"];
  } else if ((arr.length + 1) % 5 === 0) {
    return [...arr, "Buzz"];
  } else {
    return [...arr, arr.length + 1];
  }
}
