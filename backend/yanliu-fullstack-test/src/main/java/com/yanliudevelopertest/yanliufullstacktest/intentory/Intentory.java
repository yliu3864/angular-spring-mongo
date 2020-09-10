package com.yanliudevelopertest.yanliufullstacktest.intentory;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection="Intentory")
public class Intentory {
	
	@Id
	private int id;
	private String title;
	private long price;
	private long quantity;
	private String description;
	private int count;
	public Intentory(int id, String title, long price, long quantity, String description, int count) {
		super();
		this.id = id;
		this.title = title;
		this.price = price;
		this.quantity = quantity;
		this.description = description;
		this.count = count;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public long getPrice() {
		return price;
	}
	public void setPrice(long price) {
		this.price = price;
	}
	public long getQuantity() {
		return quantity;
	}
	public void setQuantity(long quantity) {
		this.quantity = quantity;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public int getCount() {
		return count;
	}
	public void setCount(int count) {
		this.count = count;
	}
	@Override
	public String toString() {
		return "Intentory [title=" + title + ", description=" + description + "]";
	}

	
	
}
