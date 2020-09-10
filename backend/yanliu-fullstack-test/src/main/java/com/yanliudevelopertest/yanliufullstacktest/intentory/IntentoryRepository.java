package com.yanliudevelopertest.yanliufullstacktest.intentory;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

public interface IntentoryRepository extends MongoRepository<Intentory,Integer>{

	@Query(value ="{title:?0}")
	Intentory findbyTitle(String title);
}	
