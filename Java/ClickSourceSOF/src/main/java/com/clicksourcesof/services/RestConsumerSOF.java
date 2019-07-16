package com.clicksourcesof.services;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.Map;

import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.http.client.HttpComponentsClientHttpRequestFactory;
import org.springframework.http.converter.HttpMessageConverter;
import org.springframework.http.converter.json.MappingJackson2HttpMessageConverter;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class RestConsumerSOF {
	
//	public void getBadge()
//	{
//        HttpHeaders headers = new HttpHeaders();
//        headers.setAccept(Arrays.asList(MediaType.APPLICATION_JSON));
//        headers.add("user-agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/54.0.2840.99 Safari/537.36");
//        HttpEntity<String> entity = new HttpEntity<String>("parameters", headers);
//        
//		String uri = "https://api.stackexchange.com/2.2/users/571194?order=desc&sort=reputation&site=stackoverflow";
//		
//		RestTemplate restTemplate = new RestTemplate();
//		System.out.println("hello");
//		ResponseEntity<String> r = restTemplate.exchange(uri, HttpMethod.GET,entity, String.class);
//		
//		
//		System.out.println(r);
//		 
//		
//		
//		
//	}
	
	
	public void getBadge()
	{
        HttpHeaders headers = new HttpHeaders();
        headers.setAccept(Arrays.asList(MediaType.APPLICATION_JSON));
         
        HttpEntity<String> entity = new HttpEntity<String>( headers);
        
		String uri = "https://api.stackexchange.com/2.2/users/571194?order=desc&sort=reputation&site=stackoverflow";
		
	    RestTemplate restTemplate = new RestTemplate();
	    
	    String result = restTemplate.getForObject(uri, String.class);
		
		System.out.println( result);
		 
		
	}

}
