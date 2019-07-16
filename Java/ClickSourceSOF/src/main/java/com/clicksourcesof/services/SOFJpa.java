package com.clicksourcesof.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.clicksourcesof.jpa.BadgeRepository;
import com.clicksourcesof.model.Badge;
import com.clicksourcesof.model.BadgeModel;

@Service
public class SOFJpa {

	@Autowired
	BadgeRepository badgeRepository;
	
	public SOFJpa() {} 
	
	public void addBadge(BadgeModel b)
	{
		badgeRepository.save(b);
	}
	
	public Badge getBadge(int id)
	{
		Optional<BadgeModel> ob = badgeRepository.findById(id);
		
		return ob.get().getBadge();
			
	}
}
