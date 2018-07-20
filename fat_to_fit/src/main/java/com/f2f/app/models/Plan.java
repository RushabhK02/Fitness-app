package com.f2f.app.models;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.NamedQuery;
import javax.persistence.Table;

import com.f2f.app.constants.PlanType;

/**
 * The persistent class for the plans database table.
 *
 */
@Entity
@Table(name = "plans")
@NamedQuery(name = "Plan.findAll", query = "SELECT p FROM Plan p")
public class Plan implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "plan_id")
	private int planId;

	@Column(name = "plan_name")
	private String planName;

	@Column(name = "plan_type")
	@Enumerated(EnumType.STRING)
	private PlanType planType;

	public int getPlanId() {
		return this.planId;
	}

	public String getPlanName() {
		return this.planName;
	}

	public PlanType getPlanType() {
		return planType;
	}

	public void setPlanId(int planId) {
		this.planId = planId;
	}

	public void setPlanName(String planName) {
		this.planName = planName;
	}

	public void setPlanType(PlanType planType) {
		this.planType = planType;
	}

	@Override
	public String toString() {
		return "Plan [planId=" + planId + ", planName=" + planName + ", planType=" + planType + "]";
	}

}