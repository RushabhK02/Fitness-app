package com.f2f.app.models;

public class PlanCombo {
	int workoutPlanId;
	int dietPlanId;
	public int getWorkoutPlan() {
		return workoutPlanId;
	}
	public void setWorkoutPlan(int workoutPlan) {
		this.workoutPlanId = workoutPlan;
	}
	public int getDietPlan() {
		return dietPlanId;
	}
	public void setDietPlan(int dietPlan) {
		this.dietPlanId = dietPlan;
	}
	@Override
	public String toString() {
		return "PlanCombo [workoutPlan=" + workoutPlanId + ", dietPlan=" + dietPlanId + "]";
	}

}
