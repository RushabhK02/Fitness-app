package com.f2f.app.models;

import java.io.Serializable;
import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name="users")
public class UserLite implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="user_id")
	private int userId;

	@Column(name="age")
	private int age;

	@Temporal(TemporalType.DATE)
	@Column(name="curr_plan_start_date")
	private Date currPlanStartDate;

	@Column(name="first_name")
	private String firstName;

	@Column(name="height_cms")
	private int heightCms;

	@Column(name="last_name")
	private String lastName;

	@Column(name="weight_kgs")
	private int weightKgs;
	
	//bi-directional many-to-one association to Plan
		@ManyToOne
		@JoinColumn(name="current_workout_plan")
		private Plan plan1;

		//bi-directional many-to-one association to Plan
		@ManyToOne
		@JoinColumn(name="current_diet_plan")
		private Plan plan2;

	public UserLite() {
	}

	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}

	public int getAge() {
		return age;
	}

	public void setAge(int age) {
		this.age = age;
	}

	public Date getCurrPlanStartDate() {
		return currPlanStartDate;
	}

	public void setCurrPlanStartDate(Date currPlanStartDate) {
		this.currPlanStartDate = currPlanStartDate;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public int getHeightCms() {
		return heightCms;
	}

	public void setHeightCms(int heightCms) {
		this.heightCms = heightCms;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public int getWeightKgs() {
		return weightKgs;
	}

	public void setWeightKgs(int weightKgs) {
		this.weightKgs = weightKgs;
	}

	public Plan getPlan1() {
		return plan1;
	}

	public void setPlan1(Plan plan1) {
		this.plan1 = plan1;
	}

	public Plan getPlan2() {
		return plan2;
	}

	public void setPlan2(Plan plan2) {
		this.plan2 = plan2;
	}

	@Override
	public String toString() {
		return "UserLite [userId=" + userId + ", age=" + age + ", currPlanStartDate=" + currPlanStartDate
				+ ", firstName=" + firstName + ", heightCms=" + heightCms + ", lastName=" + lastName + ", weightKgs="
				+ weightKgs + ", plan1=" + plan1 + ", plan2=" + plan2 + "]";
	}
	
}
