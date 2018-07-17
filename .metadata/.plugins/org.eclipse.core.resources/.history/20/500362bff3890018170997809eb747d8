package ftf_models;

import java.io.Serializable;
import javax.persistence.*;
import java.util.List;


/**
 * The persistent class for the exercises database table.
 * 
 */
@Entity
@Table(name="exercises")
@NamedQuery(name="Exercis.findAll", query="SELECT e FROM Exercis e")
public class Exercis implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="ex_id")
	private int exId;

	@Column(name="body_part_affected")
	private String bodyPartAffected;

	@Column(name="ex_name")
	private String exName;

	//bi-directional many-to-one association to UserWorkoutRecord
	@OneToMany(mappedBy="exercis")
	private List<UserWorkoutRecord> userWorkoutRecords;

	public Exercis() {
	}

	public int getExId() {
		return this.exId;
	}

	public void setExId(int exId) {
		this.exId = exId;
	}

	public String getBodyPartAffected() {
		return this.bodyPartAffected;
	}

	public void setBodyPartAffected(String bodyPartAffected) {
		this.bodyPartAffected = bodyPartAffected;
	}

	public String getExName() {
		return this.exName;
	}

	public void setExName(String exName) {
		this.exName = exName;
	}

	public List<UserWorkoutRecord> getUserWorkoutRecords() {
		return this.userWorkoutRecords;
	}

	public void setUserWorkoutRecords(List<UserWorkoutRecord> userWorkoutRecords) {
		this.userWorkoutRecords = userWorkoutRecords;
	}

	public UserWorkoutRecord addUserWorkoutRecord(UserWorkoutRecord userWorkoutRecord) {
		getUserWorkoutRecords().add(userWorkoutRecord);
		userWorkoutRecord.setExercis(this);

		return userWorkoutRecord;
	}

	public UserWorkoutRecord removeUserWorkoutRecord(UserWorkoutRecord userWorkoutRecord) {
		getUserWorkoutRecords().remove(userWorkoutRecord);
		userWorkoutRecord.setExercis(null);

		return userWorkoutRecord;
	}

}