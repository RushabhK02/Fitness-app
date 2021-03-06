package com.f2f.app;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class FatToFitApplication {
	private static Logger logger = LogManager.getLogger();

	public static void main(String[] args) {
		logger.info("Fat to fit started.");
		SpringApplication.run(FatToFitApplication.class, args);
	}
}
