package com.f2f.app.models;

import java.io.Serializable;
import javax.persistence.*;
import java.util.List;


/**
 * The persistent class for the plan_details database table.
 * 
 */
@Entity
@Table(name="plan_details")
@NamedQuery(name="PlanDetail.findAll", query="SELECT p FROM PlanDetail p")
public class PlanDetail implements Serializable {
	private static final long serialVersionUID = 1L;

	@EmbeddedId
	private PlanDetailPK id;

	@Column(name="day_details")
	private String dayDetails;

	public PlanDetail() {
	}

	public PlanDetailPK getId() {
		return this.id;
	}

	public void setId(PlanDetailPK id) {
		this.id = id;
	}

	public String getDayDetails() {
		return this.dayDetails;
	}

	public void setDayDetails(String dayDetails) {
		this.dayDetails = dayDetails;
	}

	@Override
	public String toString() {
		return "PlanDetail [id=" + id + ", dayDetails=" + dayDetails + "]";
	}

	
	

}