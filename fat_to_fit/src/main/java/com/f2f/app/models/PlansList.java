package com.f2f.app.models;

import java.util.List;

public class PlansList {
	List<Plan> dietPlans;
	List<Plan> workoutPlans;

	public List<Plan> getDietPlans() {
		return dietPlans;
	}

	public List<Plan> getWorkoutPlans() {
		return workoutPlans;
	}

	public void setDietPlans(List<Plan> dietPlans) {
		this.dietPlans = dietPlans;
	}

	public void setWorkoutPlans(List<Plan> workoutPlans) {
		this.workoutPlans = workoutPlans;
	}

}
