package com.yanliudevelopertest.yanliufullstacktest.intentory;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


@CrossOrigin(origins="http://localhost:4200")
@RestController
public class IntentoryResource {
	
	@Autowired
	private IntentoryRepository repository;

	public IntentoryResource(IntentoryRepository repository) {
		super();
		this.repository = repository;
	}
	
	@GetMapping("/all")
	public List<Intentory> getAll(){
		List<Intentory> items=this.repository.findAll();
		
		return items;
	}
	
	@PostMapping("/addItem")
	public String saveItem(@RequestBody Intentory item) {
		this.repository.save(item);
		return "book added";
	}
	
	@DeleteMapping("/{id}")
	public String delete(@PathVariable("id") int id) {
		this.repository.deleteById(id);
		return "book deleted with id "+id;
	}
	
	@GetMapping("/searchId/{id}")
	public Optional<Intentory> getBook(@PathVariable("id") int id){
		return this.repository.findById(id);
	
	}
	
	@GetMapping("/searchTitle/{title}")
	public Intentory getBook(@PathVariable("title") String title){
		Intentory item =this.repository.findbyTitle(title);
		return item;
	}
	
	@PutMapping("/updateId/{id}")
	public Intentory updateItem(@PathVariable("id") int id,@RequestBody Intentory item) {
		this.repository.save(item);
		return item;
	}
}
