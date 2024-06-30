package com.example.demo.controller;

import com.example.demo.model.MyEntity;
import com.example.demo.repository.MyEntityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class MyEntityController {
    @Autowired
    private MyEntityRepository repository;

    @GetMapping("/entities")
    public List<MyEntity> getAllEntities() {
        return repository.findAll();
    }

    @PostMapping("/entities")
    public MyEntity createEntity(@RequestBody MyEntity entity) {
        return repository.save(entity);
    }
}
