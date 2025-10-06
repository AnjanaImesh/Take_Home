package com.example.backend.Repo;

import com.example.backend.entity.todo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface todoRepo extends JpaRepository<todo, Long> {

    List<todo> findByStatus(todo.TodoStatus status);
}
