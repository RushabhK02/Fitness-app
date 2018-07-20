package com.f2f.app.models;

import org.apache.commons.lang3.builder.ReflectionToStringBuilder;

public class BasicInfo {
	int weight;
	int height;
	int age;

	public int getAge() {
		return age;
	}

	public int getHeight() {
		return height;
	}

	public int getWeight() {
		return weight;
	}

	public void setAge(int age) {
		this.age = age;
	}

	public void setHeight(int height) {
		this.height = height;
	}

	public void setWeight(int weight) {
		this.weight = weight;
	}

	@Override
	public String toString() {
		return ReflectionToStringBuilder.toString(this);
	}

}
