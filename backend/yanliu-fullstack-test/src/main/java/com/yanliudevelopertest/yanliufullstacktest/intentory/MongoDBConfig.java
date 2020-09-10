package com.yanliudevelopertest.yanliufullstacktest.intentory;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component 
public class MongoDBConfig implements CommandLineRunner{

	private IntentoryRepository repository;
	
	public MongoDBConfig(IntentoryRepository repository) {
		super();
		this.repository = repository;
	}

	@Override
	public void run(String... args) throws Exception {
		Intentory item1=new Intentory(
				1,
				"Item1",
				100,
				1,
				"This is Item 1",
				0
				);
		Intentory item2=new Intentory(
				2,
				"Item2",
				200,
				2,
				"This is Item 2",
				0

				);
		Intentory item3=new Intentory(
				3,
				"Item3",
				300,
				3,
				"This is Item 3",
				0

				);
		Intentory item4=new Intentory(
				4,
				"Item4",
				400,
				4,
				"This is Item 4",
				0

				);
		Intentory item5=new Intentory(
				5,
				"Item5",
				500,
				5,
				"This is Item 5",
				0

				);
		Intentory item6=new Intentory(
				6,
				"Item6",
				600,
				6,
				"This is Item 6",
				0
				);
		
		
		this.repository.save(item1);
		this.repository.save(item2);
		this.repository.save(item3);
		this.repository.save(item4);
		this.repository.save(item5);
		this.repository.save(item6);
		
	}
	
	
	

}
