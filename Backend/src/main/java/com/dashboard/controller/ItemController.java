package com.dashboard.controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.dashboard.model.Item;
import com.dashboard.service.ItemService;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class ItemController {
    
    @Autowired
    private ItemService itemService;
    
    @GetMapping("/items")
    public ResponseEntity<List<Item>> getItems(@RequestParam(required = false) String search) {
        List<Item> items;
        if (search != null && !search.trim().isEmpty()) {
            items = itemService.searchItems(search);
        } else {
            items = itemService.getAllItems();
        }
        return ResponseEntity.ok(items);
    }
}
