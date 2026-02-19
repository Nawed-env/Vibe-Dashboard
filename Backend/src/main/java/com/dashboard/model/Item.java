package com.dashboard.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Item {
	private Long id;
	private String title;
	private String description;
	private String category;
	private String imageUrl;
	private Double rating;
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getCategory() {
		return category;
	}
	public void setCategory(String category) {
		this.category = category;
	}
	public String getImageUrl() {
		return imageUrl;
	}
	public void setImageUrl(String imageUrl) {
		this.imageUrl = imageUrl;
	}
	public Double getRating() {
		return rating;
	}
	public void setRating(Double rating) {
		this.rating = rating;
	}
	@Override
	public String toString() {
		return "Item [id=" + id + ", title=" + title + ", description=" + description + ", category=" + category
				+ ", imageUrl=" + imageUrl + ", rating=" + rating + "]";
	}
	public Item(Long id, String title, String description, String category, String imageUrl, Double rating) {
		super();
		this.id = id;
		this.title = title;
		this.description = description;
		this.category = category;
		this.imageUrl = imageUrl;
		this.rating = rating;
	}
	public Item() {
		super();
		// TODO Auto-generated constructor stub
	}

	
	
	
}
