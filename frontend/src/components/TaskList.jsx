import React from 'react';
import TaskCard from './TaskCard';
import { ListTodo } from 'lucide-react';

export default function TaskList({ tasks, onComplete }) {
  if (tasks.length === 0) {
    return (
      <div className="bg-white rounded-3xl shadow-lg p-8 h-full flex flex-col">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Recent Tasks</h2>
        <div className="flex-1 flex flex-col items-center justify-center text-gray-400">
          <ListTodo size={64} strokeWidth={1.5} className="mb-4" />
          <p className="text-lg font-medium">No tasks yet</p>
          <p className="text-sm mt-2">Add your first task to get started!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl shadow-lg p-8 h-full flex flex-col">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Recent Tasks
        <span className="ml-2 text-sm font-normal text-gray-500">
          (Showing last 5)
        </span>
      </h2>

      <div className="flex-1 space-y-4 overflow-y-auto pr-2 custom-scrollbar">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} onComplete={onComplete} />
        ))}
      </div>
    </div>
  );
}
