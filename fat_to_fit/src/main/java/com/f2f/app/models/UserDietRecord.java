package com.f2f.app.models;

import java.io.Serializable;

import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.JoinColumns;
import javax.persistence.ManyToOne;
import javax.persistence.NamedQuery;
import javax.persistence.Table;

/**
 * The persistent class for the user_diet_records database table.
 *
 */
@Entity
@Table(name = "user_diet_records")
@NamedQuery(name = "UserDietRecord.findAll", query = "SELECT u FROM UserDietRecord u")
public class UserDietRecord implements Serializable {
	private static final long serialVersionUID = 1L;

	@EmbeddedId
	private UserDietRecordPK id;

	@Column(name = "calorie_intake")
	private int calorieIntake;

	// bi-directional many-to-one association to User
	@ManyToOne
	@JoinColumn(name = "user_id")
	private User user;

	// bi-directional many-to-one association to PlanDetail
	@ManyToOne
	@JoinColumns({ @JoinColumn(name = "day", referencedColumnName = "day", insertable = false, updatable = false),
			@JoinColumn(name = "diet_id", referencedColumnName = "plan_id", insertable = false, updatable = false) })
	private PlanDetail planDetail;

	@Basic(optional = false)
	@Column(name = "diet_id")
	private int dietId;

	public int getCalorieIntake() {
		return this.calorieIntake;
	}

	public int getDietId() {
		return dietId;
	}

	public UserDietRecordPK getId() {
		return this.id;
	}

	public PlanDetail getPlanDetail() {
		return this.planDetail;
	}

	public User getUser() {
		return this.user;
	}

	public void setCalorieIntake(int calorieIntake) {
		this.calorieIntake = calorieIntake;
	}

	public void setDietId(int dietId) {
		this.dietId = dietId;
	}

	public void setId(UserDietRecordPK id) {
		this.id = id;
	}

	public void setPlanDetail(PlanDetail planDetail) {
		this.planDetail = planDetail;
	}

	public void setUser(User user) {
		this.user = user;
	}

	@Override
	public String toString() {
		return "UserDietRecord [id=" + id + ", calorieIntake=" + calorieIntake + ", user=" + user + ", planDetail="
				+ planDetail + "]";
	}

}