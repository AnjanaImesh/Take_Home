import React, { useState, useEffect } from 'react';
import { todoAPI } from './lib/api';
import AddTaskForm from './components/AddTaskForm';
import TaskList from './components/TaskList';

function App() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const { data, error } = await todoAPI.getAllTodos();

      if (error) throw new Error(error);
      
      // Filter for incomplete tasks and limit to 5 most recent
      const incompleteTasks = (data || [])
        .filter(task => task.status !== 'COMPLETED')
        .slice(0, 5);
      
      setTasks(incompleteTasks);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleAddTask = async (taskData) => {
    try {
      const { data, error } = await todoAPI.createTodo(taskData);

      if (error) throw new Error(error);

      // Refresh the tasks list to get the updated data
      await fetchTasks();
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  const handleCompleteTask = async (taskId) => {
    try {
      const { error } = await todoAPI.updateTodoStatus(taskId, 'COMPLETED');

      if (error) throw new Error(error);

      // Remove the completed task from the current list
      setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));

      // Fetch fresh tasks to fill the gap
      fetchTasks();
    } catch (error) {
      console.error('Error completing task:', error);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-3">
            Task Manager
          </h1>
          <p className="text-gray-600 text-lg">
            Organize your day, accomplish your goals
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="h-[600px]">
            <AddTaskForm onAddTask={handleAddTask} />
          </div>

          <div className="h-[600px]">
            <TaskList tasks={tasks} onComplete={handleCompleteTask} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
