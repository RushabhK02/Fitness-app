package com.f2f.app.models;

public class UserLite {

	private int userId;

	private String firstName;

	private String lastName;

	public String getFirstName() {
		return firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public int getUserId() {
		return userId;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}

	@Override
	public String toString() {
		return "UserLite [userId=" + userId + ", firstName=" + firstName + ", lastName=" + lastName + "]";
	}

}
