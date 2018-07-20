package com.f2f.app.models;

import org.apache.commons.lang3.builder.ReflectionToStringBuilder;

public class AllocationPoints {

	int workoutPoints = 0;
	int dietPoints = 0;

	public int getDietPoints() {
		return dietPoints;
	}

	public int getWorkoutPoints() {
		return workoutPoints;
	}

	public void setDietPoints(int dietPoints) {
		this.dietPoints = dietPoints;
	}

	public void setWorkoutPoints(int workoutPoints) {
		this.workoutPoints = workoutPoints;
	}

	@Override
	public String toString() {
		return ReflectionToStringBuilder.toString(this);
	}

}
