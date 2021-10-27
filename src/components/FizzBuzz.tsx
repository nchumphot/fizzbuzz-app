import { useState } from "react";
import { nextFizzBuzzInteration } from "../utils/next-fizzbuzz-iteration";

export default function FizzBuzz(): JSX.Element {
  const [array, setArray] = useState<(number | string)[]>([1]);
  const arrayToList = (text: string | number): JSX.Element => {
    return <li>{text}</li>;
  };

  return (
    <>
      <h1>Welcome to the FizzBuzz app!</h1>
      <button
        onClick={() => {
          setArray((prev) => nextFizzBuzzInteration(prev));
        }}
      >
        NEXT
      </button>
      <p>Result:</p>
      <ul>{array.map(arrayToList)}</ul>
    </>
  );
}
