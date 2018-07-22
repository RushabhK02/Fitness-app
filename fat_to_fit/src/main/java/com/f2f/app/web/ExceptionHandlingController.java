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
import com.f2f.app.exceptions.OperationFailedException;
import com.f2f.app.exceptions.ResourceNotFoundException;

@ControllerAdvice
@Order(Ordered.HIGHEST_PRECEDENCE)
public class ExceptionHandlingController {
	private static Logger logger = LogManager.getLogger();

	@ExceptionHandler(OperationFailedException.class)
	public ResponseEntity<ExceptionResponse> operationFailed(OperationFailedException ex) {
		ExceptionResponse response = new ExceptionResponse();
		response.setErrorCode("400 Bad Request");
		response.setErrorMessage(ex.getMessage());
		logger.warn("OperationFailedException occurred at:" + ex.toString());
		return new ResponseEntity<>(response, HttpStatus.BAD_REQUEST);
	}

	@ExceptionHandler(ResourceNotFoundException.class)
	public ResponseEntity<ExceptionResponse> resourceNotFound(ResourceNotFoundException ex) {
		ExceptionResponse response = new ExceptionResponse();
		response.setErrorCode("404 Not found");
		response.setErrorMessage(ex.getMessage());
		logger.warn("ResourceNotFoundException occurred at:" + ex.toString());
		return new ResponseEntity<>(response, HttpStatus.NOT_FOUND);
	}
}
