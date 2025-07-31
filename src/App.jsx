import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="counterapp bg-black w-full min-h-screen flex flex-col justify-center items-center text-white">
        <h1 className="text-4xl mb-10">Counter App</h1>

        <div className="controls flex gap-50 mb-4">
          <button
            className="increment bg-green-500 px-8 py-3 rounded-2xl text-lg text-white text-center font-bold"
            onClick={() => {
              setCount(count + 1);
            }}
          >
            +
          </button>
          <p className="result text-xl">{count}</p>
          <button
            className="decrement bg-red-500 px-8 py-3 rounded-2xl text-lg text-white text-center font-bold"
            onClick={() => {
              setCount(count - 1);
            }}
          >
            -
          </button>
        </div>

        <button
          className="reset bg-yellow-500 px-4 py-2  mt-3 rounded-2xl text-lg "
          onClick={() => setCount(0)}
        >
          Reset
        </button>
      </div>
    </>
  );
}

export default App;
