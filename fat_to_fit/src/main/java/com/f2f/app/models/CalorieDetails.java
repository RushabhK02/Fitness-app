package com.f2f.app.models;

public class CalorieDetails {
	int day;
	int calorieIntake;
	public int getDay() {
		return day;
	}
	public void setDay(int day) {
		this.day = day;
	}
	public int getCalorieIntake() {
		return calorieIntake;
	}
	public void setCalorieIntake(int calorieIntake) {
		this.calorieIntake = calorieIntake;
	}
	@Override
	public String toString() {
		return "CalorieDetails [day=" + day + ", calorieIntake=" + calorieIntake + "]";
	}
}
