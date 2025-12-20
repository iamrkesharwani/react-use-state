import { IoCheckmarkDoneCircle } from 'react-icons/io5';

const Empty = () => {
  return (
    <div className="flex flex-col items-center pt-7 justify-center px-6">
      <div className="relative mb-6">
        <div className="absolute inset-0 bg-emerald-200 rounded-full opacity-30"></div>
        <div className="relative bg-gradient-to-br from-emerald-100 to-teal-100 rounded-full p-8 shadow-lg">
          <IoCheckmarkDoneCircle className="w-20 h-20 text-emerald-500" />
        </div>
      </div>

      <h3 className="text-2xl font-bold text-gray-800 mb-2">All Clear!</h3>

      <p className="text-sm text-gray-500 text-center max-w-xs leading-relaxed">
        No tasks yet. Add your first task above to get started on your
        productive day.
      </p>
    </div>
  );
};

export default Empty;
