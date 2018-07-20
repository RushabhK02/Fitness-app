package com.f2f.app.models;

import java.io.Serializable;

import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.JoinColumn;
import javax.persistence.JoinColumns;
import javax.persistence.ManyToOne;
import javax.persistence.NamedQuery;
import javax.persistence.Table;

import org.apache.commons.lang3.builder.ReflectionToStringBuilder;

import com.f2f.app.constants.ExerciseStatus;

/**
 * The persistent class for the user_workout_records database table.
 *
 */
@Entity
@Table(name = "user_workout_records")
@NamedQuery(name = "UserWorkoutRecord.findAll", query = "SELECT u FROM UserWorkoutRecord u")
public class UserWorkoutRecord implements Serializable {
	private static final long serialVersionUID = 1L;

	@EmbeddedId
	private UserWorkoutRecordPK id;

	@Column(name = "sets_completed")
	private int setsCompleted;

	@Enumerated(EnumType.STRING)
	private ExerciseStatus status;

	// bi-directional many-to-one association to User
	@ManyToOne
	@JoinColumn(name = "user_id")
	private User user;

	// bi-directional many-to-one association to PlanDetail
	@ManyToOne
	@JoinColumns({ @JoinColumn(name = "day", referencedColumnName = "day", insertable = false, updatable = false),
			@JoinColumn(name = "workout_id", referencedColumnName = "plan_id", insertable = false, updatable = false) })
	private PlanDetail planDetail;

	@Basic(optional = false)
	@Column(name = "workout_id")
	private int workoutId;

	public UserWorkoutRecord() {
	}

	public UserWorkoutRecordPK getId() {
		return this.id;
	}

	public PlanDetail getPlanDetail() {
		return this.planDetail;
	}

	public int getSetsCompleted() {
		return this.setsCompleted;
	}

	public ExerciseStatus getStatus() {
		return status;
	}

	public User getUser() {
		return this.user;
	}

	public int getWorkoutId() {
		return workoutId;
	}

	public void setId(UserWorkoutRecordPK id) {
		this.id = id;
	}

	public void setPlanDetail(PlanDetail planDetail) {
		this.planDetail = planDetail;
	}

	public void setSetsCompleted(int setsCompleted) {
		this.setsCompleted = setsCompleted;
	}

	public void setStatus(ExerciseStatus status) {
		this.status = status;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public void setWorkoutId(int workoutId) {
		this.workoutId = workoutId;
	}

	@Override
	public String toString() {
		return ReflectionToStringBuilder.toString(this);
	}

}