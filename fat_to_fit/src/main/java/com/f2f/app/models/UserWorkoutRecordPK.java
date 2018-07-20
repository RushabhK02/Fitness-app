package com.f2f.app.models;

import java.io.Serializable;
import javax.persistence.*;

/**
 * The primary key class for the user_workout_records database table.
 * 
 */
@Embeddable
public class UserWorkoutRecordPK implements Serializable {
	//default serial version id, required for serializable classes.
	private static final long serialVersionUID = 1L;

	@Column(name="allotment_id", insertable=false, updatable=false)
	private int allotmentId;

	@JoinColumn(name="day", referencedColumnName="day",insertable=false,updatable=false)
	private int day;

	@Column(name="ex_id", insertable=false, updatable=false)
	private int exId;

	public UserWorkoutRecordPK() {
	}
	public int getAllotmentId() {
		return this.allotmentId;
	}
	public void setAllotmentId(int allotmentId) {
		this.allotmentId = allotmentId;
	}
	public int getDay() {
		return this.day;
	}
	public void setDay(int day) {
		this.day = day;
	}
	public int getExId() {
		return this.exId;
	}
	public void setExId(int exId) {
		this.exId = exId;
	}

	public boolean equals(Object other) {
		if (this == other) {
			return true;
		}
		if (!(other instanceof UserWorkoutRecordPK)) {
			return false;
		}
		UserWorkoutRecordPK castOther = (UserWorkoutRecordPK)other;
		return 
			(this.allotmentId == castOther.allotmentId)
			&& (this.day == castOther.day)
			&& (this.exId == castOther.exId);
	}

	public int hashCode() {
		final int prime = 31;
		int hash = 17;
		hash = hash * prime + this.allotmentId;
		hash = hash * prime + this.day;
		hash = hash * prime + this.exId;
		
		return hash;
	}
	
	@Override
	public String toString() {
		return "UserWorkoutRecordPK [allotmentId=" + allotmentId + ", day=" + day + ", exId=" + exId + "]";
	}
	
}