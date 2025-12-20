import { useState } from 'react';
import Empty from './Empty';
import Task from './Task';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState(null);

  function addTask(e) {
    e.preventDefault();

    if (!newTask.trim()) return;

    if (isEditing && editingId !== null) {
      setTasks((prev) =>
        prev.map((t) =>
          t.id === editingId ? { ...t, name: newTask.trim() } : t
        )
      );
      setEditingId(null);
      setIsEditing(false);
    } else {
      const task = {
        id: isEditing ? editingId : Date.now(),
        name: newTask.trim(),
        completed: false,
      };

      setTasks((prev) => [...prev, task]);
    }

    setNewTask('');
  }

  function editTask(task) {
    setIsEditing(true);
    setEditingId(task.id);
    setNewTask(task.name);
  }

  function toggleTask(id) {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }

  function deleteTask(id) {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  }

  function clearCompleted() {
    setTasks((prev) => prev.filter((task) => !task.completed));
  }

  const total = tasks.length;
  const completed = tasks.filter((task) => task.completed).length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 flex items-center justify-center px-4 py-4">
      <div className="w-full max-w-3xl h-[600px] flex flex-col rounded-3xl overflow-hidden shadow-2xl bg-white border border-emerald-200/60">
        {/* HEADER */}
        <header className="relative overflow-hidden flex flex-col sm:flex-row px-6 sm:px-8 justify-between items-start sm:items-center py-3 gap-4 bg-gradient-to-r from-emerald-500 to-teal-500">
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold leading-tight text-white drop-shadow-sm">
              Today's Tasks
            </h1>
            <p className="text-sm text-emerald-50 mt-2 font-medium">
              Stay organized and achieve your goals
            </p>
          </div>

          <div className="flex items-end gap-3">
            <div className="rounded-2xl border border-white/40 bg-white/20 backdrop-blur-md px-5 py-4 text-right shadow-lg">
              <p className="text-[10px] uppercase tracking-[0.25em] text-emerald-50 font-semibold mb-1">
                Progress
              </p>
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                <span>{completed}</span>{' '}
                <span className="text-emerald-100">/</span> <span>{total}</span>
              </h2>
            </div>
          </div>
        </header>

        {/* INPUT BAR */}
        <form
          onSubmit={addTask}
          className="bg-emerald-50/80 px-6 py-5 flex gap-3 border-b border-emerald-100"
        >
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            className="flex-1 rounded-xl bg-white border-2 border-emerald-200 px-5 py-3.5 text-sm text-gray-800 placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 transition-all shadow-sm"
            placeholder="What would you like to accomplish?"
          />
          <button
            type="submit"
            className="shrink-0 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-sm font-bold px-7 py-3.5 hover:from-emerald-600 hover:to-teal-600 active:scale-95 transition-all shadow-md hover:shadow-lg"
          >
            {isEditing ? 'Update Task' : 'Add Task'}
          </button>
        </form>

        {/* TASK LIST */}
        <section className="flex-1 bg-gradient-to-b from-white to-emerald-50/30 px-6 pb-4 pt-5 flex flex-col gap-3 overflow-hidden overflow-y-auto">
          <div className="flex-1 flex flex-col gap-3 pr-1">
            {tasks.length === 0 ? (
              <Empty />
            ) : (
              tasks.map((task) => (
                <Task
                  key={task.id}
                  task={task}
                  onToggle={() => toggleTask(task.id)}
                  onDelete={() => deleteTask(task.id)}
                  onEdit={() => editTask(task)}
                />
              ))
            )}
          </div>
        </section>

        {/* FOOTER */}
        <footer className="bg-emerald-50/60 backdrop-blur-sm px-6 py-2 border-t border-emerald-100 flex items-center gap-4 flex-wrap">
          <button
            className="ml-auto inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-red-500 to-rose-500 text-white text-xs font-bold px-5 py-3 hover:from-red-600 hover:to-rose-600 active:scale-95 transition-all shadow-md hover:shadow-lg"
            onClick={clearCompleted}
          >
            <span>Clear Completed</span>
          </button>
        </footer>
      </div>
    </div>
  );
};

export default App;
