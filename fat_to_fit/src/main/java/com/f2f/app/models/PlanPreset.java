package com.f2f.app.models;

import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;

@JsonIgnoreProperties(ignoreUnknown = true)
public class PlanPreset {
	@JsonProperty("Plan")
	Plan plan;
	@JsonProperty("planDetails")
	ArrayList<PlanDetail> planDetails;
	
	public Plan getPlan() {
		return plan;
	}
	public void setPlan(Plan plan) {
		this.plan = plan;
	}
	public List<PlanDetail> getPlanDetails() {
		return planDetails;
	}
	public void setPlanDetails(ArrayList<PlanDetail> planDetails) {
		this.planDetails = planDetails;
	}
	@Override
	public String toString() {
		return "PlanPreset [plan=" + plan + ", planDetails=" + planDetails + "]";
	}

}
