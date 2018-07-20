package com.f2f.app.models;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.NamedQuery;
import javax.persistence.Table;

/**
 * The persistent class for the exercises database table.
 *
 */
@Entity
@Table(name = "exercises", schema = "fat_to_fit")
@NamedQuery(name = "Exercise.findAll", query = "SELECT e FROM Exercise e")
public class Exercise implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "ex_id")
	private int exId;

	@Column(name = "body_part_affected")
	private String bodyPartAffected;

	@Column(name = "ex_name")
	private String exName;

	public String getBodyPartAffected() {
		return this.bodyPartAffected;
	}

	public int getExId() {
		return this.exId;
	}

	public String getExName() {
		return this.exName;
	}

	public void setBodyPartAffected(String bodyPartAffected) {
		this.bodyPartAffected = bodyPartAffected;
	}

	public void setExId(int exId) {
		this.exId = exId;
	}

	public void setExName(String exName) {
		this.exName = exName;
	}

	@Override
	public String toString() {
		return "Exercise [exId=" + exId + ", bodyPartAffected=" + bodyPartAffected + ", exName=" + exName + "]";
	}

}