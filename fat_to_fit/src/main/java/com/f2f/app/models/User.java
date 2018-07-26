package com.f2f.app.models;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.NamedQuery;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.apache.commons.lang3.StringUtils;
import org.apache.commons.lang3.builder.ReflectionToStringBuilder;

/**
 * The persistent class for the users database table.
 *
 */
@Entity
@Table(name = "users")
@NamedQuery(name = "User.findAll", query = "SELECT u FROM User u")
public class User implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "user_id")
	private int userId;

	private int age;

	@Temporal(TemporalType.DATE)
	@Column(name = "curr_plan_start_date")
	private Date currPlanStartDate = new Date();

	@Column(name = "first_name")
	private String firstName;

	@Column(name = "height_cms")
	private int heightCms;

	@Column(name = "last_name")
	private String lastName;

	@Column(name = "password")
	private String password;

	private String username;

	@Column(name = "weight_kgs")
	private int weightKgs;

	// bi-directional many-to-one association to Plan
	@ManyToOne
	@JoinColumn(name = "current_workout_plan")
	private Plan currentWorkoutPlan = null;

	// bi-directional many-to-one association to Plan
	@ManyToOne
	@JoinColumn(name = "current_diet_plan")
	private Plan currentDietPlan = null;

	public int getAge() {
		return this.age;
	}

	public Plan getCurrentDietPlan() {
		return this.currentDietPlan;
	}

	public Plan getcurrentWorkoutPlan() {
		return this.currentWorkoutPlan;
	}

	public Date getCurrPlanStartDate() {
		return this.currPlanStartDate;
	}

	public String getFirstName() {
		return this.firstName;
	}

	public int getHeightCms() {
		return this.heightCms;
	}

	public String getLastName() {
		return this.lastName;
	}

	public String getPassword() {
		return this.password;
	}

	public int getUserId() {
		return this.userId;
	}

	public String getUsername() {
		return this.username;
	}

	public int getWeightKgs() {
		return this.weightKgs;
	}

	public void setAge(int age) {
		this.age = age;
	}

	public void setCurrentDietPlan(Plan currentDietPlan) {
		this.currentDietPlan = currentDietPlan;
	}

	public void setcurrentWorkoutPlan(Plan currentWorkoutPlan) {
		this.currentWorkoutPlan = currentWorkoutPlan;
	}

	public void setCurrPlanStartDate(Date currPlanStartDate) {
		this.currPlanStartDate = currPlanStartDate;
	}

	public void setFirstName(String firstName) {
		if (StringUtils.isBlank(firstName)) {
			this.firstName = StringUtils.EMPTY;
		} else {
			this.firstName = firstName.trim();
		}
	}

	public void setHeightCms(int heightCms) {
		this.heightCms = heightCms;
	}

	public void setLastName(String lastName) {
		if (StringUtils.isBlank(lastName)) {
			this.lastName = StringUtils.EMPTY;
		} else {
			this.lastName = lastName.trim();
		}
	}

	public void setPassword(String password) {
		if (StringUtils.isBlank(password)) {
			this.password = StringUtils.EMPTY;
		} else {
			this.password = password.trim();
		}
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}

	public void setUsername(String username) {
		if (StringUtils.isBlank(username)) {
			this.username = StringUtils.EMPTY;
		} else {
			this.username = username.trim();
		}
	}

	public void setWeightKgs(int weightKgs) {
		this.weightKgs = weightKgs;
	}

	@Override
	public String toString() {
		return ReflectionToStringBuilder.toString(this);
	}

}