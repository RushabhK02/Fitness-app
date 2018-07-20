package com.f2f.app.models;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.NamedQuery;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * The persistent class for the plan_details database table.
 *
 */
@Entity
@Table(name = "plan_details")
@NamedQuery(name = "PlanDetail.findAll", query = "SELECT p FROM PlanDetail p")
@JsonIgnoreProperties(ignoreUnknown = true)
public class PlanDetail implements Serializable {
	private static final long serialVersionUID = 1L;

	@EmbeddedId
	@JsonProperty("id")
	private PlanDetailPK id;

	@Column(name = "day_details")
	@JsonProperty("dayDetails")
	private String dayDetails;

	@ManyToOne
	@JoinColumn(name = "plan_id", referencedColumnName = "plan_id", insertable = false, updatable = false)
	private Plan plan;

	public String getDayDetails() {
		return this.dayDetails;
	}

	public PlanDetailPK getId() {
		return this.id;
	}

	public Plan getPlan() {
		return plan;
	}

	public void setDayDetails(String dayDetails) {
		this.dayDetails = dayDetails;
	}

	public void setId(PlanDetailPK id) {
		this.id = id;
	}

	public void setPlan(Plan plan) {
		this.plan = plan;
	}

	@Override
	public String toString() {
		return "PlanDetail [id=" + id + ", dayDetails=" + dayDetails + "]";
	}

}