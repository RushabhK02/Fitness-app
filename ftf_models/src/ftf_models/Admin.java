package ftf_models;

import java.io.Serializable;
import javax.persistence.*;
import java.util.List;


/**
 * The persistent class for the admins database table.
 * 
 */
@Entity
@Table(name="admins")
@NamedQuery(name="Admin.findAll", query="SELECT a FROM Admin a")
public class Admin implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="admin_id")
	private int adminId;

	private String clients;

	@Column(name="first_name")
	private String firstName;

	@Column(name="last_name")
	private String lastName;

	private String password;

	private String username;

	//bi-directional many-to-one association to Allotment
	@OneToMany(mappedBy="admin")
	private List<Allotment> allotments;

	public Admin() {
	}

	public int getAdminId() {
		return this.adminId;
	}

	public void setAdminId(int adminId) {
		this.adminId = adminId;
	}

	public String getClients() {
		return this.clients;
	}

	public void setClients(String clients) {
		this.clients = clients;
	}

	public String getFirstName() {
		return this.firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return this.lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getPassword() {
		return this.password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getUsername() {
		return this.username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public List<Allotment> getAllotments() {
		return this.allotments;
	}

	public void setAllotments(List<Allotment> allotments) {
		this.allotments = allotments;
	}

	public Allotment addAllotment(Allotment allotment) {
		getAllotments().add(allotment);
		allotment.setAdmin(this);

		return allotment;
	}

	public Allotment removeAllotment(Allotment allotment) {
		getAllotments().remove(allotment);
		allotment.setAdmin(null);

		return allotment;
	}

}