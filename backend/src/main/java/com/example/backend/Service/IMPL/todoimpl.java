package com.example.backend.Service.IMPL;

import com.example.backend.DTO.todoDTO;
import com.example.backend.Repo.todoRepo;
import com.example.backend.Service.todoService;
import com.example.backend.entity.todo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class todoimpl implements todoService {

    @Autowired
    private todoRepo todoRepo;

    @Override
    public String saveTodo(todoDTO todoDTO) {
        todo todoEntity = todoDTO.toEntity();
        todoEntity.setCreatedAt(LocalDateTime.now());
        todoEntity.setUpdatedAt(LocalDateTime.now());
        todoRepo.save(todoEntity);
        return "Todo saved successfully";
    }

    @Override
    public List<todoDTO> getAllTodos() {
        List<todo> todos = todoRepo.findAll();
        return todos.stream()
                .map(todoDTO::fromEntity)
                .collect(Collectors.toList());
    }

    @Override
    public todoDTO updateTodo(todoDTO todoDTO) {
        todo existingTodo = todoRepo.findById(todoDTO.getId())
                .orElseThrow(() -> new RuntimeException("Todo not found with id: " + todoDTO.getId()));

        existingTodo.setTitle(todoDTO.getTitle());
        existingTodo.setDescription(todoDTO.getDescription());
        existingTodo.setStatus(todoDTO.getStatus());
        existingTodo.setUpdatedAt(LocalDateTime.now());

        todo updatedTodo = todoRepo.save(existingTodo);
        return com.example.backend.DTO.todoDTO.fromEntity(updatedTodo);
    }

    @Override
    public String deleteTodo(Long id) {
        if (!todoRepo.existsById(id)) {
            throw new RuntimeException("Todo not found with id: " + id);
        }
        todoRepo.deleteById(id);
        return "Todo deleted successfully";
    }

    @Override
    public todoDTO getTodoById(Long id) {
        todo todoEntity = todoRepo.findById(id)
                .orElseThrow(() -> new RuntimeException("Todo not found with id: " + id));
        return todoDTO.fromEntity(todoEntity);
    }

    @Override
    public List<todoDTO> getTodosByStatus(String status) {
        todo.TodoStatus todoStatus = todo.TodoStatus.valueOf(status.toUpperCase());
        List<todo> todos = todoRepo.findByStatus(todoStatus);
        return todos.stream()
                .map(todoDTO::fromEntity)
                .collect(Collectors.toList());
    }

    @Override
    public String updateTodoStatus(Long id, String status) {
        todo existingTodo = todoRepo.findById(id)
                .orElseThrow(() -> new RuntimeException("Todo not found with id: " + id));

        todo.TodoStatus todoStatus = todo.TodoStatus.valueOf(status.toUpperCase());
        existingTodo.setStatus(todoStatus);
        existingTodo.setUpdatedAt(LocalDateTime.now());

        todoRepo.save(existingTodo);
        return "Todo status updated successfully";
    }
}
