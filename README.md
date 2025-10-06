# To-Do Task Web Application

A full-stack web application for managing personal tasks and improving productivity. This application allows users to create, view, and manage their to-do tasks through an intuitive web interface.

## 📋 Project Overview

This assessment project is a small to-do task web application built with modern web technologies, featuring a React frontend and Spring Boot backend.

## 🎯 User Requirements

### Core Functionality
- **Task Creation**: End users can create to-do tasks through the web UI by providing:
  - Task title (required)
  - Task description (optional)
- **Task Management**: Users can view and manage their created tasks
- **Task Completion**: Users can mark tasks as completed
- **Real-time Updates**: Tasks are updated dynamically in the interface

### User Interface Features
- Clean and intuitive web interface
- Responsive design that works on desktop and mobile devices
- Real-time task list updates
- Visual feedback for user actions

## 🏗️ Architecture

### Frontend
- **Framework**: React 18 with functional components
- **Build Tool**: Vite for fast development and building
- **Styling**: Tailwind CSS for modern, responsive design
- **Icons**: Lucide React for beautiful iconography
- **State Management**: React hooks for local state management

### Backend
- **Framework**: Spring Boot (Java)
- **Database**: H2 in-memory database for development
- **API**: RESTful API with JSON responses
- **Documentation**: Swagger UI for API exploration
- **Architecture**: Layered architecture with Controller, Service, and Repository layers

## 🚀 Getting Started

### Prerequisites
- **Node.js** (version 16 or higher)
- **Java** (version 17 or higher)
- **Maven** (version 3.6 or higher)

### Installation Steps

1. **Clone the Repository**
   ```bash
   git clone <repository-url>
   cd Take_Home
   ```

2. **Backend Setup**
   ```bash
   cd backend
   # Install dependencies and build
   ./mvnw clean install
   
   # Run the Spring Boot application
   ./mvnw spring-boot:run
   ```
   The backend server will start on `http://localhost:8080`

3. **Frontend Setup**
   ```bash
   cd frontend
   # Install npm dependencies
   npm install
   
   # Start the development server
   npm run dev
   ```
   The frontend application will be available at `http://localhost:5173`

## 📱 Application Features

### Task Creation
- Simple form interface for creating new tasks
- Required title field with validation
- Optional description field for additional details
- Instant task addition to the list

### Task Display
- Clean list view of all created tasks
- Shows task title and description
- Visual distinction between pending and completed tasks
- Responsive grid layout

### Task Management
- Mark tasks as completed with a single click
- Visual feedback when tasks are completed
- Real-time updates without page refresh

## 🛠️ Technical Implementation

### API Endpoints
- `GET /api/todos` - Retrieve all tasks
- `POST /api/todos` - Create a new task
- `PUT /api/todos/{id}/status` - Update task status

### Database Schema
- **Todo Entity**: Stores task information including title, description, status, and timestamps
- **Status Types**: PENDING, IN_PROGRESS, COMPLETED

### Frontend Components
- **AddTaskForm**: Form component for creating new tasks
- **TaskList**: Component for displaying list of tasks
- **TaskCard**: Individual task display component
- **App**: Main application component managing state

## 🎨 User Interface Design

### Design Principles
- **Simplicity**: Clean, uncluttered interface focused on task management
- **Accessibility**: Proper contrast ratios and keyboard navigation support
- **Responsiveness**: Works seamlessly across different screen sizes
- **Visual Feedback**: Clear indication of user actions and system state

### Color Scheme
- Primary colors: Blue gradients for buttons and accents
- Success indicators: Green for completed tasks
- Neutral colors: Gray scale for backgrounds and text
- Modern gradient backgrounds for visual appeal

## 🔧 Development

### Frontend Development
```bash
cd frontend
npm run dev    # Start development server
npm run build  # Build for production
npm run lint   # Run ESLint
```

### Backend Development
```bash
cd backend
./mvnw spring-boot:run    # Run in development mode
./mvnw test              # Run tests
./mvnw clean package     # Build JAR file
```

## 📊 Project Structure

```
Take_Home/
├── frontend/                 # React application
│   ├── src/
│   │   ├── components/      # React components
│   │   ├── lib/            # API utilities
│   │   ├── App.jsx         # Main app component
│   │   └── main.jsx        # Entry point
│   ├── package.json
│   └── tailwind.config.js
├── backend/                 # Spring Boot application
│   ├── src/main/java/
│   │   └── com/example/backend/
│   │       ├── controller/ # REST controllers
│   │       ├── entity/     # JPA entities
│   │       ├── repository/ # Data repositories
│   │       └── service/    # Business logic
│   └── pom.xml
└── README.md
```

## 🧪 Testing

### Manual Testing Steps
1. Start both backend and frontend servers
2. Navigate to the web application
3. Create a new task with title and description
4. Verify task appears in the list
5. Mark task as completed
6. Verify task status updates

## 🔍 API Documentation

When the backend is running, visit `http://localhost:8080/swagger-ui.html` to explore the API endpoints interactively.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-feature`)
3. Make your changes
4. Commit your changes (`git commit -am 'Add new feature'`)
5. Push to the branch (`git push origin feature/new-feature`)
6. Create a Pull Request

## 📝 License

This project is created for assessment purposes.

## 🔧 Troubleshooting

### Common Issues
- **Port conflicts**: Make sure ports 8080 (backend) and 5173 (frontend) are available
- **CORS errors**: Backend includes CORS configuration for frontend communication
- **Database issues**: H2 database runs in-memory and resets on application restart

### Support
For technical issues or questions about the implementation, please refer to the code comments and documentation within the source files.
