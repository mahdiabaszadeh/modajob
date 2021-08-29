
import { useState } from "react";

const math = {
  ali: 20,
  sohrab: 18.5,
  farhad: 12,
};

const phisics = {
  ...math,
  mahdi: 15,
  shahram: 9.5,
};
console.log(math);
console.log(phisics);


function Recipes() {
  const [state, setstate] = useState();

  return (
    <div>
      <h3>current Test</h3>
      <button
        onClick={() => {
          setstate(math);
        }}
      >
        math
      </button>
      <button
        onClick={() => {
          setstate(phisics);
        }}
      >
        phisics
      </button>

      <ul>
        {state && Object.keys(state).map((item) => {
          return (
            <li key={item}>
              {item}: {state[item]}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Recipes;
