package ftf_models;

import java.io.Serializable;
import javax.persistence.*;

/**
 * The primary key class for the plan_details database table.
 * 
 */
@Embeddable
public class PlanDetailPK implements Serializable {
	//default serial version id, required for serializable classes.
	private static final long serialVersionUID = 1L;

	@Column(name="plan_id", insertable=false, updatable=false)
	private int planId;

	private int day;

	public PlanDetailPK() {
	}
	public int getPlanId() {
		return this.planId;
	}
	public void setPlanId(int planId) {
		this.planId = planId;
	}
	public int getDay() {
		return this.day;
	}
	public void setDay(int day) {
		this.day = day;
	}

	public boolean equals(Object other) {
		if (this == other) {
			return true;
		}
		if (!(other instanceof PlanDetailPK)) {
			return false;
		}
		PlanDetailPK castOther = (PlanDetailPK)other;
		return 
			(this.planId == castOther.planId)
			&& (this.day == castOther.day);
	}

	public int hashCode() {
		final int prime = 31;
		int hash = 17;
		hash = hash * prime + this.planId;
		hash = hash * prime + this.day;
		
		return hash;
	}
}