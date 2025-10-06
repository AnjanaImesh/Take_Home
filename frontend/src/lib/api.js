// API configuration for Spring Boot backend
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8045/api/v1/todo';

// API service class
class TodoAPI {
  // Get all todos
  async getAllTodos() {
    try {
      const response = await fetch(`${API_BASE_URL}/get-all`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return { data, error: null };
    } catch (error) {
      console.error('Error fetching todos:', error);
      return { data: null, error: error.message };
    }
  }

  // Get todo by ID
  async getTodoById(id) {
    try {
      const response = await fetch(`${API_BASE_URL}/get/${id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return { data, error: null };
    } catch (error) {
      console.error('Error fetching todo:', error);
      return { data: null, error: error.message };
    }
  }

  // Create new todo
  async createTodo(todoData) {
    try {
      const response = await fetch(`${API_BASE_URL}/save`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(todoData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const message = await response.text();
      return { data: message, error: null };
    } catch (error) {
      console.error('Error creating todo:', error);
      return { data: null, error: error.message };
    }
  }

  // Update todo
  async updateTodo(id, todoData) {
    try {
      const response = await fetch(`${API_BASE_URL}/update/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(todoData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return { data, error: null };
    } catch (error) {
      console.error('Error updating todo:', error);
      return { data: null, error: error.message };
    }
  }

  // Delete todo
  async deleteTodo(id) {
    try {
      const response = await fetch(`${API_BASE_URL}/delete/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const message = await response.text();
      return { data: message, error: null };
    } catch (error) {
      console.error('Error deleting todo:', error);
      return { data: null, error: error.message };
    }
  }

  // Get todos by status
  async getTodosByStatus(status) {
    try {
      const response = await fetch(`${API_BASE_URL}/get-by-status/${status}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return { data, error: null };
    } catch (error) {
      console.error('Error fetching todos by status:', error);
      return { data: null, error: error.message };
    }
  }

  // Update todo status
  async updateTodoStatus(id, status) {
    try {
      const response = await fetch(`${API_BASE_URL}/update-status/${id}?status=${status}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const message = await response.text();
      return { data: message, error: null };
    } catch (error) {
      console.error('Error updating todo status:', error);
      return { data: null, error: error.message };
    }
  }
}

// Export singleton instance
export const todoAPI = new TodoAPI();