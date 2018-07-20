package com.f2f.app.models;

import com.f2f.app.constants.ExerciseStatus;

public class ExerciseDetails {

	int day;
	ExerciseStatus status;
	int setsCompleted;
	int exId;

	public int getDay() {
		return day;
	}

	public void setDay(int day) {
		this.day = day;
	}

	public ExerciseStatus getStatus() {
		return status;
	}

	public void setStatus(ExerciseStatus status) {
		this.status = status;
	}

	public int getSetsCompleted() {
		return setsCompleted;
	}

	public void setSetsCompleted(int setsCompleted) {
		this.setsCompleted = setsCompleted;
	}

	public int getExId() {
		return exId;
	}

	public void setExId(int exId) {
		this.exId = exId;
	}

	@Override
	public String toString() {
		return "ExerciseDetails [day=" + day + ", status=" + status + ", setsCompleted=" + setsCompleted + ", exId="
				+ exId + "]";
	}

}
