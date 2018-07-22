package com.f2f.app.web;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.core.Ordered;
import org.springframework.core.annotation.Order;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import com.f2f.app.exceptions.ExceptionResponse;

@ControllerAdvice
@Order(Ordered.LOWEST_PRECEDENCE)
public class DefaultExceptionHandlingController {
	private static Logger logger = LogManager.getLogger();

	@ExceptionHandler(RuntimeException.class)
	public ResponseEntity<ExceptionResponse> handleRuntimeException(RuntimeException ex) {
		ExceptionResponse response = new ExceptionResponse();
		response.setErrorCode("500 Internal Server Error");
		response.setErrorMessage(ex.getMessage());
		logger.warn("Runtime Exception occurred at:" + ex.toString());
		return new ResponseEntity<>(response, HttpStatus.INTERNAL_SERVER_ERROR);
	}
}
