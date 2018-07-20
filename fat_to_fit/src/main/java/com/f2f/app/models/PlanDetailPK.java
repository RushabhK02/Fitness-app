package com.f2f.app.models;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Embeddable;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * The primary key class for the plan_details database table.
 *
 */
@Embeddable
public class PlanDetailPK implements Serializable {
	// default serial version id, required for serializable classes.
	private static final long serialVersionUID = 1L;

	@Column(name = "plan_id", insertable = false, updatable = false)
	@JsonProperty("planId")
	private int planId;

	@JsonProperty("day")
	private int day;

	@Override
	public boolean equals(Object other) {
		if (this == other) {
			return true;
		}
		if (!(other instanceof PlanDetailPK)) {
			return false;
		}
		PlanDetailPK castOther = (PlanDetailPK) other;
		return this.planId == castOther.planId && this.day == castOther.day;
	}

	public int getDay() {
		return this.day;
	}

	public int getPlanId() {
		return this.planId;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int hash = 17;
		hash = hash * prime + this.planId;
		hash = hash * prime + this.day;

		return hash;
	}

	public void setDay(int day) {
		this.day = day;
	}

	public void setPlanId(int planId) {
		this.planId = planId;
	}

	@Override
	public String toString() {
		return "PlanDetailPK [planId=" + planId + ", day=" + day + "]";
	}

}