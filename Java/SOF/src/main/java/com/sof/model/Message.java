package com.sof.model;

public class Message {

	String message;
	
	public Message()
	{
		
	}

	
	public Message(String message) {
		super();
		this.message = message;
	}

	/**
	 * Method that retrieve message
	 * */
	public String getMessage() {
		return message;
	}

	/**
	 * Method that set message
	 * */
	public void setMessage(String message) {
		this.message = message;
	}
	
	
	
	
}
