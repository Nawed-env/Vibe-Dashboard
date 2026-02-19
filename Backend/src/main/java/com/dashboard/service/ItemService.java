package com.dashboard.service;


import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.dashboard.model.Item;

import jakarta.annotation.PostConstruct;

@Service
public class ItemService {
    
    private List<Item> items = new ArrayList<>();
    
    @PostConstruct
    public void init() {
        //  Some sample data has been initialized
        items.add(new Item(1L, "Modern Workspace", "A sleek and minimalist workspace setup with natural lighting", "Design", "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400", 4.8));
        items.add(new Item(2L, "Creative Studio", "Professional creative studio with latest technology", "Technology", "https://images.unsplash.com/photo-1547658719-da2b51169166?w=400", 4.9));
        items.add(new Item(3L, "Coffee Break", "Relaxing coffee corner for creative thinking", "Lifestyle", "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400", 4.7));
        items.add(new Item(4L, "Team Collaboration", "Open space designed for team brainstorming", "Business", "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400", 4.6));
        items.add(new Item(5L, "Innovation Lab", "State-of-the-art innovation laboratory", "Technology", "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400", 4.9));
        items.add(new Item(6L, "Zen Garden", "Peaceful workspace with natural elements", "Design", "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400", 4.5));
        items.add(new Item(7L, "Digital Hub", "Connected digital workspace for remote teams", "Technology", "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400", 4.8));
        items.add(new Item(8L, "Startup Office", "Dynamic startup office environment", "Business", "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=400", 4.7));
    }
    
    public List<Item> getAllItems() {
        return items;
    }
    
    public List<Item> searchItems(String query) {
        if (query == null || query.trim().isEmpty()) {
            return items;
        }
        
        String lowerQuery = query.toLowerCase();
        return items.stream()
                .filter(item -> 
                    item.getTitle().toLowerCase().contains(lowerQuery) ||
                    item.getDescription().toLowerCase().contains(lowerQuery) ||
                    item.getCategory().toLowerCase().contains(lowerQuery)
                )
                .collect(Collectors.toList());
    }
}
