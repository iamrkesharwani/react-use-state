import { IoMdSwap } from 'react-icons/io';
import { FaThermometerHalf } from 'react-icons/fa';
import { TbTemperature } from 'react-icons/tb';
import { useState } from 'react';

const App = () => {
  const [value, setValue] = useState(0);
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [temp, setTemp] = useState(null);

  function handleConvert() {
    const v = parseFloat(value);

    if (isNaN(v) || from === '' || to === '') {
      setTemp(null);
      return;
    }

    if (from === to) {
      setTemp(v);
    }

    // CELSIUS
    else if (from === 'Cel' && to === 'Fah') setTemp((v * 9) / 5 + 32);
    else if (from === 'Cel' && to === 'Kel') setTemp(v + 273.15);
    else if (from === 'Cel' && to === 'Ran') setTemp((v + 273.15) * (9 / 5));
    // FAHRENHEIT
    else if (from === 'Fah' && to === 'Cel') setTemp((v - 32) * (5 / 9));
    else if (from === 'Fah' && to === 'Kel')
      setTemp((v - 32) * (5 / 9) + 273.15);
    else if (from === 'Fah' && to === 'Ran') setTemp(v + 459.67);
    // KELVIN
    else if (from === 'Kel' && to === 'Cel') setTemp(v - 273.15);
    else if (from === 'Kel' && to === 'Fah')
      setTemp((v - 273.15) * (9 / 5) + 32);
    else if (from === 'Kel' && to === 'Ran') setTemp(v * (9 / 5));
    // RANKINE
    else if (from === 'Ran' && to === 'Cel') setTemp((v - 491.67) * (5 / 9));
    else if (from === 'Ran' && to === 'Fah') setTemp(v - 459.67);
    else if (from === 'Ran' && to === 'Kel') setTemp(v * (5 / 9));
    // FALLBACK
    else setTemp(null);
  }

  function handleSwap() {
    const newFrom = to;
    setTo(from);
    setFrom(newFrom);
  }

  return (
    <div className="h-screen bg-slate-900 flex items-center justify-center p-6">
      <div className="w-full max-w-2xl bg-slate-800 rounded-2xl shadow-2xl p-8 border border-slate-700">
        {/* Header */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <FaThermometerHalf className="text-slate-400 text-3xl" />
          <h1 className="text-4xl font-bold text-white">
            Temperature Converter
          </h1>
        </div>

        {/* Input Section */}
        <div className="mb-6">
          <label className="flex items-center gap-2 text-sm font-medium text-slate-300 mb-2">
            <TbTemperature className="text-slate-400" />
            Enter Temperature
          </label>
          <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            type="text"
            placeholder="0"
            className="w-full px-6 py-3 text-xl bg-slate-700 text-white border border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-500 transition-all"
          />
        </div>

        {/* Conversion Section */}
        <div className="flex items-end gap-4 mb-6">
          <div className="flex-1">
            <label className="block text-sm font-medium text-slate-300 mb-2">
              From
            </label>
            <select
              value={from}
              className="w-full px-4 py-3 bg-slate-700 text-white border border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-500 cursor-pointer transition-all"
              onChange={(e) => setFrom(e.target.value)}
            >
              <option value="">--Select--</option>
              <option value="Cel">Celsius (°C)</option>
              <option value="Fah">Fahrenheit (°F)</option>
              <option value="Kel">Kelvin (K)</option>
              <option value="Ran">Rankine (°R)</option>
            </select>
          </div>

          <button
            className="bg-blue-700 hover:bg-blue-600 text-white p-3 rounded-full shadow-lg transition-all hover:scale-95 duration-300 border border-blue-600"
            onClick={handleSwap}
          >
            <IoMdSwap size={24} />
          </button>

          <div className="flex-1">
            <label className="block text-sm font-medium text-slate-300 mb-2">
              To
            </label>
            <select
              value={to}
              className="w-full px-4 py-3 bg-slate-700 text-white border border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-500 cursor-pointer transition-all"
              onChange={(e) => setTo(e.target.value)}
            >
              <option value="">--Select--</option>
              <option value="Cel">Celsius (°C)</option>
              <option value="Fah">Fahrenheit (°F)</option>
              <option value="Kel">Kelvin (K)</option>
              <option value="Ran">Rankine (°R)</option>
            </select>
          </div>
        </div>

        {/* Convert Button */}
        <div className="flex justify-center mb-6">
          <button
            onClick={handleConvert}
            className="bg-blue-700 hover:bg-blue-600 text-white font-semibold px-16 py-3 rounded-xl transition-all shadow-lg hover:shadow-xl hover:scale-95 border border-blue-600"
          >
            Convert
          </button>
        </div>

        {/* Result Section */}
        <div className="bg-slate-900 rounded-xl p-6 border border-slate-700">
          <label className="block text-sm font-medium text-slate-400 mb-3 text-center">
            Result
          </label>
          <div className="text-center">
            <p className="text-5xl font-bold text-white mb-2">
              {temp === null ? '--' : temp}
            </p>
            <p className="text-slate-500 text-sm">
              Enter values and click convert
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
