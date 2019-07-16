package com.clicksourcesof.model;

import org.springframework.data.annotation.Id;

public class BadgeModel {
	
	@Id
	public int id;
	
	public Badge badge;
	
	public BadgeModel() {}
	
	public BadgeModel(int id, Badge badge) {
		super();
		this.id = id;
		this.badge = badge;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public Badge getBadge() {
		return badge;
	}

	public void setBadge(Badge badge) {
		this.badge = badge;
	}

	@Override
	public String toString() {
		return "BadgeModel [id=" + id + ", badge=" + badge + "]";
	}
	
	
	

}
