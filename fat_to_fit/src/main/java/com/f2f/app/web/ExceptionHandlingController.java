package com.f2f.app.web;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import com.f2f.app.exceptions.ExceptionResponse;
import com.f2f.app.exceptions.ResourceNotFoundException;

@ControllerAdvice
public class ExceptionHandlingController {

	@ExceptionHandler(ResourceNotFoundException.class)
	public ResponseEntity<ExceptionResponse> resourceNotFound(ResourceNotFoundException ex) {
		ExceptionResponse response = new ExceptionResponse();
		response.setErrorCode("404 Not found");
		response.setErrorMessage(ex.getMessage());

		return new ResponseEntity<>(response, HttpStatus.NOT_FOUND);
	}
}
