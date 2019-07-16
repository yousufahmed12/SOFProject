package com.clicksourcesof;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@ComponentScan({"com.clicksourcesof"})
@SpringBootApplication
public class ClickSourceSofApplication {

	public static void main(String[] args) {
		SpringApplication.run(ClickSourceSofApplication.class, args);
	}

}
