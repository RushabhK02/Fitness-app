package com.f2f.app.models;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Embeddable;

/**
 * The primary key class for the user_diet_records database table.
 *
 */
@Embeddable
public class UserDietRecordPK implements Serializable {
	// default serial version id, required for serializable classes.
	private static final long serialVersionUID = 1L;

	@Column(name = "allotment_id", insertable = false, updatable = false)
	private int allotmentId;

	@Column(name = "day", insertable = false, updatable = false)
	private int day;

	@Override
	public boolean equals(Object other) {
		if (this == other) {
			return true;
		}
		if (!(other instanceof UserDietRecordPK)) {
			return false;
		}
		UserDietRecordPK castOther = (UserDietRecordPK) other;
		return this.allotmentId == castOther.allotmentId && this.day == castOther.day;
	}

	public int getAllotmentId() {
		return this.allotmentId;
	}

	public int getDay() {
		return this.day;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int hash = 17;
		hash = hash * prime + this.allotmentId;
		hash = hash * prime + this.day;

		return hash;
	}

	public void setAllotmentId(int allotmentId) {
		this.allotmentId = allotmentId;
	}

	public void setDay(int day) {
		this.day = day;
	}

	@Override
	public String toString() {
		return "UserDietRecordPK [allotmentId=" + allotmentId + ", day=" + day + "]";
	}

}