package ftf_models;

import java.io.Serializable;
import javax.persistence.*;


/**
 * The persistent class for the user_diet_records database table.
 * 
 */
@Entity
@Table(name="user_diet_records")
@NamedQuery(name="UserDietRecord.findAll", query="SELECT u FROM UserDietRecord u")
public class UserDietRecord implements Serializable {
	private static final long serialVersionUID = 1L;

	@EmbeddedId
	private UserDietRecordPK id;

	@Column(name="calorie_intake")
	private int calorieIntake;

	//bi-directional many-to-one association to User
	@ManyToOne
	@JoinColumn(name="user_id")
	private User user;

	//bi-directional many-to-one association to PlanDetail
	@ManyToOne
	@JoinColumns({
		@JoinColumn(name="day", referencedColumnName="day"),
		@JoinColumn(name="diet_id", referencedColumnName="plan_id")
		})
	private PlanDetail planDetail;

	//bi-directional many-to-one association to Allotment
	@ManyToOne
	@JoinColumn(name="allotment_id")
	private Allotment allotment;

	public UserDietRecord() {
	}

	public UserDietRecordPK getId() {
		return this.id;
	}

	public void setId(UserDietRecordPK id) {
		this.id = id;
	}

	public int getCalorieIntake() {
		return this.calorieIntake;
	}

	public void setCalorieIntake(int calorieIntake) {
		this.calorieIntake = calorieIntake;
	}

	public User getUser() {
		return this.user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public PlanDetail getPlanDetail() {
		return this.planDetail;
	}

	public void setPlanDetail(PlanDetail planDetail) {
		this.planDetail = planDetail;
	}

	public Allotment getAllotment() {
		return this.allotment;
	}

	public void setAllotment(Allotment allotment) {
		this.allotment = allotment;
	}

}