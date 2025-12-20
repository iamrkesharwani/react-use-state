import { FaTrash } from 'react-icons/fa6';
import { MdEditSquare } from 'react-icons/md';

const Task = ({ task, onToggle, onDelete, onEdit }) => {
  const isDone = task.completed;

  return (
    <div className="group rounded-2xl bg-white border-2 border-emerald-100 px-5 py-4 shadow-sm hover:shadow-lg hover:border-emerald-300 hover:bg-emerald-50/50 transition-all duration-300">
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-4 flex-1">
          <input
            type="checkbox"
            checked={isDone}
            onChange={onToggle}
            className="h-5 w-5 accent-emerald-500 rounded-md cursor-pointer transition-transform hover:scale-110"
          />
          <div className="flex flex-col flex-1">
            <h1 className="text-sm sm:text-lg font-bold leading-snug text-gray-900 group-hover:text-emerald-700 transition-colors">
              {task.name}
            </h1>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={onEdit}
            className="opacity-0 group-hover:opacity-100 inline-flex items-center justify-center rounded-xl p-2.5 bg-emerald-100 hover:bg-emerald-200 border border-emerald-200 hover:border-emerald-300 transition-all duration-200"
          >
            <MdEditSquare className="text-emerald-600 text-base hover:scale-110 transition-transform" />
          </button>
          <button
            onClick={onDelete}
            className="opacity-0 group-hover:opacity-100 inline-flex items-center justify-center rounded-xl p-2.5 bg-red-50 hover:bg-red-100 border border-red-200 hover:border-red-300 transition-all duration-200"
          >
            <FaTrash className="text-red-500 text-sm hover:scale-110 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Task;
