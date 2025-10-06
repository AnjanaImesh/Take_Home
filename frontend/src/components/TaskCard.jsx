import React from 'react';
import { Check } from 'lucide-react';

export default function TaskCard({ task, onComplete }) {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-5 shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-1 border border-gray-200">
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 min-w-0">
          <h3 className="font-bold text-gray-800 text-lg mb-2 line-clamp-2">
            {task.title}
          </h3>
          {task.description && (
            <p className="text-sm text-gray-600 line-clamp-2">
              {task.description}
            </p>
          )}
        </div>

        <button
          onClick={() => onComplete(task.id)}
          className="flex-shrink-0 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-4 py-2 rounded-xl font-medium shadow-md hover:shadow-lg transition-all duration-200 flex items-center gap-2 transform hover:scale-105"
        >
          <Check size={16} />
          Done
        </button>
      </div>
    </div>
  );
}
