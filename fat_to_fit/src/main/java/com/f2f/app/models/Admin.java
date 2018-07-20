package com.f2f.app.models;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.NamedQuery;
import javax.persistence.Table;

import org.apache.commons.lang3.StringUtils;
import org.apache.commons.lang3.builder.ReflectionToStringBuilder;

/**
 * The persistent class for the admins database table.
 *
 */
@Entity
@Table(name = "admins")
@NamedQuery(name = "Admin.findAll", query = "SELECT a FROM Admin a")
public class Admin implements Serializable {

	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "admin_id")
	private int adminId;

	private String clients;

	@Column(name = "first_name")
	private String firstName;

	@Column(name = "last_name")
	private String lastName;

	private String password;

	private String username;

	public int getAdminId() {
		return this.adminId;
	}

	public String getClients() {
		return this.clients;
	}

	public String getFirstName() {
		return this.firstName;
	}

	public String getLastName() {
		return this.lastName;
	}

	public String getPassword() {
		return this.password;
	}

	public String getUsername() {
		return this.username;
	}

	public void setAdminId(int adminId) {
		this.adminId = adminId;
	}

	public void setClients(String clients) {
		if (StringUtils.isBlank(clients)) {
			this.clients = StringUtils.EMPTY;
		} else {
			this.clients = clients.trim();
		}

	}

	public void setFirstName(String firstName) {
		if (StringUtils.isBlank(firstName)) {
			this.firstName = StringUtils.EMPTY;
		} else {
			this.firstName = firstName.trim();
		}
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

	public void setUsername(String username) {
		if (StringUtils.isBlank(username)) {
			this.username = StringUtils.EMPTY;
		} else {
			this.username = username.trim();
		}
	}

	@Override
	public String toString() {
		return ReflectionToStringBuilder.toString(this);
	}

}