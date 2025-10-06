package com.example.backend.DTO;

import com.example.backend.entity.todo;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

/**
 * Data Transfer Object for Todo entity.
 * Used for transferring todo data between layers.
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
public class todoDTO {

    private Long id;
    private String title;
    private String description;
    private todo.TodoStatus status;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;

    /**
     * Constructor for creating DTO without ID (for new todos).
     */
    public todoDTO(String title, String description, todo.TodoStatus status) {
        this.title = title;
        this.description = description;
        this.status = status;
        this.createdAt = LocalDateTime.now();
        this.updatedAt = LocalDateTime.now();
    }

    /**
     * Convert Entity to DTO.
     */
    public static todoDTO fromEntity(todo todo) {
        if (todo == null) {
            return null;
        }
        return new todoDTO(
            todo.getId(),
            todo.getTitle(),
            todo.getDescription(),
            todo.getStatus(),
            todo.getCreatedAt(),
            todo.getUpdatedAt()
        );
    }

    /**
     * Convert DTO to Entity.
     */
    public todo toEntity() {
        todo todoEntity = new todo();
        todoEntity.setId(this.id);
        todoEntity.setTitle(this.title);
        todoEntity.setDescription(this.description);
        todoEntity.setStatus(this.status);
        todoEntity.setCreatedAt(this.createdAt != null ? this.createdAt : LocalDateTime.now());
        todoEntity.setUpdatedAt(this.updatedAt != null ? this.updatedAt : LocalDateTime.now());
        return todoEntity;
    }
}
