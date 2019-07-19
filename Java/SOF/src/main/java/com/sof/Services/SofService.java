package com.sof.Services;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Service;

import com.sof.model.StackCandidate;

@Service
public interface SofService extends MongoRepository<StackCandidate, String> {
	
	public StackCandidate findByStackId(String stackId);

}
