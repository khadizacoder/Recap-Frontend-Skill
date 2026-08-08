import { useState } from "react";

import Counter from "./components/Counter";
import ProgressBar from "./components/ProgressBar";

const MAX = 10;
const MIN = 0;

function App() {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount((prev) => Math.min(prev + 1, MAX));
  };

  const decrease = () => {
    setCount((prev) => Math.max(prev - 1, MIN));
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <main className="min-h-screen bg-slate-100 flex items-center justify-center p-5">

      <section className="w-full max-w-md rounded-3xl bg-white shadow-xl p-8">

        {/* Header */}

        <div className="text-center">

          <h1 className="text-4xl font-bold text-slate-800">
            Smart Counter
          </h1>

          <p className="text-slate-500 mt-2">
            Build with React & Tailwind CSS
          </p>

        </div>

        <Counter count={count} />

        <ProgressBar count={count} />

        <div className="mt-8 flex justify-center gap-4">

          <button
            onClick={decrease}
            className="px-5 py-3 rounded-xl bg-red-500 text-white font-semibold hover:bg-red-600 transition"
          >
            -
          </button>

          <button
            onClick={reset}
            className="px-5 py-3 rounded-xl bg-slate-600 text-white font-semibold hover:bg-slate-700 transition"
          >
            Reset
          </button>

          <button
            onClick={increase}
            className="px-5 py-3 rounded-xl bg-green-500 text-white font-semibold hover:bg-green-600 transition"
          >
            +
          </button>

        </div>

      </section>

    </main>
  );
}

export default App;