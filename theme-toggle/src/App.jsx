import { useState } from 'react';
import { FiMoon, FiSun } from 'react-icons/fi';

const App = () => {
  const [theme, setTheme] = useState('light');

  function handleTheme() {
    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark');
      setTheme('light');
    } else {
      document.documentElement.classList.add('dark');
      setTheme('dark');
    }
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-100 via-indigo-100 to-sky-100 dark:from-slate-900 
      dark:via-indigo-950 dark:to-slate-900 p-6 transition-all"
    >
      <div className="w-full max-w-lg bg-white dark:bg-slate-900 rounded-3xl shadow-xl border border-slate-200 dark:border-slate-700">
        {/* HEADER */}
        <header className="px-7 pt-6 pb-4 border-b border-slate-200 dark:border-slate-700">
          <h1 className="text-lg font-semibold text-slate-800 dark:text-white">
            Theme Switcher
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            Light & Dark mode interface
          </p>
        </header>

        {/* TOGGLE SWITCH */}
        <section
          className="px-7 py-5 flex items-center justify-between border-t border-slate-200 dark:border-slate-700"
          onClick={handleTheme}
        >
          <div>
            <p className="text-sm font-medium text-slate-700 dark:text-slate-200">
              Appearance
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Choose how the app looks
            </p>
          </div>

          {/* Toggle UI Box */}
          <div className="relative w-28 h-11 rounded-full bg-slate-200 dark:bg-slate-800 border border-slate-300 dark:border-slate-600 flex items-center justify-between px-2 shadow-inner">
            <div
              className={`ml-2 text-xs ${
                theme === 'dark' ? 'dark:text-slate-400' : 'opacity-0'
              }`}
            >
              Dark
            </div>

            <div
              className={`text-xs mr-2 ${
                theme === 'dark' ? 'opacity-0' : 'text-slate-600'
              }`}
            >
              Light
            </div>

            {/* Knob */}
            <div
              className={`absolute top-[0.20rem] h-9 w-12 rounded-full bg-white dark:bg-indigo-600 text-slate-900 dark:text-white shadow-md flex items-center justify-center transition-all duration-300 ${
                theme === 'dark' ? 'translate-x-[50px]' : 'translate-x-0'
              }`}
            >
              {theme === 'dark' ? (
                <FiMoon size={16} />
              ) : (
                <FiSun className="text-yellow-500" size={16} />
              )}
            </div>
          </div>
        </section>

        {/* CURRENT THEME DISPLAY */}
        <section className="px-7 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-yellow-600 dark:bg-indigo-600 text-white flex items-center justify-center">
              <FiSun className="block dark:hidden" size={18} />
              <FiMoon className="hidden dark:block" size={18} />
            </div>

            <div>
              <p className="text-sm font-medium text-slate-800 dark:text-white">
                Current Theme
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {theme === 'light' ? 'Light' : 'Dark'} mode active
              </p>
            </div>
          </div>

          <span className="text-xs font-medium px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 dark:bg-indigo-600 dark:text-white">
            {theme === 'light' ? 'Light' : 'Dark'}
          </span>
        </section>
      </div>
    </div>
  );
};

export default App;
