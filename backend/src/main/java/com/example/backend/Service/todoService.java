package com.example.backend.Service;

import com.example.backend.DTO.todoDTO;

import java.util.List;

public interface todoService {

    String saveTodo(todoDTO todoDTO);

    List<todoDTO> getAllTodos();

    todoDTO updateTodo(todoDTO todoDTO);

    String deleteTodo(Long id);

    todoDTO getTodoById(Long id);

    List<todoDTO> getTodosByStatus(String status);

    String updateTodoStatus(Long id, String status);
}
