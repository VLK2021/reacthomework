import {useState} from "react";

export default function App(){
  let [counter, setCounter] = useState(0);

  let increment = () => {
    setCounter(++counter);
  };

  let decrement = () => {
    setCounter(--counter);
  };

  let reset = () => {
    setCounter( 0);
  };

  return(
      <div>
        <h2>number is - {counter}</h2>
        <button onClick={increment}>increment</button>
        <button onClick={decrement}>decrement</button>
        <button onClick={reset}>reset</button>
      </div>
  );
}


