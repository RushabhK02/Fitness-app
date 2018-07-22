package com.f2f.app.exceptions;

public class OperationFailedException extends RuntimeException {
	/**
	* 
	*/
	private static final long serialVersionUID = 1L;
	private Long resourceId;

	public OperationFailedException(Long resourceId, String message) {
		super(message);
		this.resourceId = resourceId;
	}
}