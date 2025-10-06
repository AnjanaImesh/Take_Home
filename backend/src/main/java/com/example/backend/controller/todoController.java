package com.example.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.backend.DTO.todoDTO;
import com.example.backend.Service.todoService;

import java.util.List;

@RestController
@RequestMapping("api/v1/todo")
@CrossOrigin
public class todoController {

    @Autowired
    private todoService todoService;

    @PostMapping(path = "/save")
    public String save(@RequestBody todoDTO todoDTO) {
        return todoService.saveTodo(todoDTO);
    }

    @GetMapping(path = "/get-all")
    public List<todoDTO> getAllTodos() {
        return todoService.getAllTodos();
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<todoDTO> updateTodo(
            @PathVariable Long id,
            @RequestBody todoDTO todoDTO
    ) {
        todoDTO.setId(id);
        todoDTO updatedTodo = todoService.updateTodo(todoDTO);
        return ResponseEntity.ok(updatedTodo);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteTodo(@PathVariable Long id) {
        String message = todoService.deleteTodo(id);
        return ResponseEntity.ok(message);
    }

    @GetMapping("/get/{id}")
    public ResponseEntity<todoDTO> getTodoById(@PathVariable Long id) {
        todoDTO todo = todoService.getTodoById(id);
        return ResponseEntity.ok(todo);
    }

    @GetMapping("/get-by-status/{status}")
    public List<todoDTO> getTodosByStatus(@PathVariable String status) {
        return todoService.getTodosByStatus(status);
    }

    @PatchMapping("/update-status/{id}")
    public ResponseEntity<String> updateTodoStatus(
            @PathVariable Long id,
            @RequestParam String status
    ) {
        String message = todoService.updateTodoStatus(id, status);
        return ResponseEntity.ok(message);
    }
}
