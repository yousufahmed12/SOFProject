package com.clicksourcesof.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.clicksourcesof.model.Badge;
import com.clicksourcesof.model.BadgeModel;
import com.clicksourcesof.services.RestConsumerSOF;
import com.clicksourcesof.services.SOFJpa;

import org.springframework.beans.factory.annotation.Autowired;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class SofController {
	
	@Autowired
	private SOFJpa sofJpa;
	
	@GetMapping("api/badge/{id}")
	public Badge getBadge(@PathVariable int id)
	{
		
		return sofJpa.getBadge(id);
	}
	
	@PostMapping("api/badge/{id}")
	public String postBadge(@PathVariable int id, @RequestBody Badge b)
	{
		BadgeModel bm = new BadgeModel(id,b);
		sofJpa.addBadge(bm);
		
		return "true";
	}
}
