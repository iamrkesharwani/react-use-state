import { useState } from 'react';

const App = () => {
  const [word, setWord] = useState('');
  const [show, setShow] = useState(true);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-200 via-indigo-200 to-sky-200 flex items-center justify-center p-8">
      <div className="w-full max-w-2xl min-h-[500px] bg-slate-100/80 backdrop-blur-xl border border-slate-300 rounded-2xl shadow-xl flex flex-col">
        {/* Header */}
        <div className="px-8 pt-7 pb-4 border-b border-slate-300">
          <h1 className="text-xl font-semibold text-slate-800">
            Live Text Preview
          </h1>
          <p className="text-slate-600 text-sm mt-1">
            Instant feedback as you type
          </p>
        </div>

        {/* Input */}
        <div className="px-8 py-6">
          <label className="block text-sm text-slate-700 mb-2">
            Type something
          </label>

          <input
            onChange={(e) => setWord(e.target.value)}
            type="text"
            placeholder="Start typing here..."
            maxLength={350}
            value={word}
            className="w-full h-12 rounded-lg border border-slate-400 bg-slate-200 px-4 outline-none focus:ring-2 focus:ring-indigo-400"
          />

          <div className="text-right text-xs text-slate-600 mt-1 flex justify-between">
            <span>{350 - word.length} characters remaining</span>
            <span>{word.length} / 350 characters</span>
          </div>
        </div>

        {/* Preview */}
        <div className="flex-1 px-8">
          <div className="flex justify-between items-center mb-2">
            {show && (
              <h3 className="text-sm font-medium text-slate-800">Preview</h3>
            )}

            <button
              onClick={() => setShow(!show)}
              className="text-indigo-600 text-sm hover:underline"
            >
              {show ? 'Hide' : 'Show'}
            </button>
          </div>

          {show && (
            <div
              className={`h-40 rounded-lg bg-indigo-50/50 p-4 text-slate-800 overflow-y-auto break-words whitespace-pre-wrap ${
                word.length > 300
                  ? 'border-red-600 border-2'
                  : 'border border-slate-400'
              }`}
            >
              {word.length > 0 ? word : 'Your preview will show here...'}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-8 py-4 border-t border-slate-300 flex justify-end">
          <button
            onClick={() => {
              setWord('');
              setShow(true);
            }}
            className={`px-5 py-2 rounded-lg  text-white transition ${
              word.length === 0
                ? 'bg-red-300 cursor-not-allowed'
                : 'bg-red-500 hover:bg-red-600'
            }`}
            disabled={word.length === 0}
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
