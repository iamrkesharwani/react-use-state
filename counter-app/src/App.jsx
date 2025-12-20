import { useState } from 'react';

const App = () => {
  const [number, setNumber] = useState(0);

  function handleIncrease() {
    setNumber((prev) => prev + 1);
  }

  function handleReset() {
    setNumber(0);
  }

  function handleDecrease() {
    if (number > 0) {
      setNumber((prev) => prev - 1);
    }
  }

  return (
    <div
      className="h-screen bg-gradient-to-br from-slate-900 to-black flex
      items-center justify-center"
    >
      <div
        className="bg-white/5 backdrop-blur-xl rounded-2xl shadow-xl border-white/10 
        p-10 border flex flex-col items-center gap-8"
      >
        <h1 className="text-[8rem] font-bold text-white drop-shadow-lg">
          {number}
        </h1>

        <div className="flex gap-4">
          <button
            onClick={handleDecrease}
            disabled={number === 0}
            className={`px-6 py-3 rounded-xl text-lg font-medium transition-all duration-200 
              ${
                number === 0
                  ? 'bg-red-900/40 text-gray-400 cursor-not-allowed'
                  : 'bg-red-600 hover:bg-red-500 hover:scale-105 active:scale-95'
              }
            `}
          >
            −
          </button>

          <button
            onClick={handleReset}
            className="px-6 py-3 rounded-xl text-lg font-medium bg-gray-700 hover:bg-gray-600 transition-all duration-200 hover:scale-105 active:scale-95"
          >
            Reset
          </button>

          <button
            onClick={handleIncrease}
            className="px-6 py-3 rounded-xl text-lg font-medium bg-emerald-600 hover:bg-emerald-500 transition-all duration-200 hover:scale-105 active:scale-95"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
