package com.VotingSystem.entity;

import java.time.LocalDate;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class UserEntity {
	@Id
	@GeneratedValue
	private Integer id;
	
	//@NotNull(message="name is mandatory")
	private String name;
	
	//@NotNull(message="address is mandatory")
	private String address;
	
	//@NotNull(message="DOB is mandatory")
	private LocalDate DOB;
	
	//@NotNull(message="gender is mandatory")
	private String gender;
	
	//@NotNull(message="contact is mandatory")
	private String contact;
	
	//@NotNull(message="district is mandatory")
	private String district;
	

	//@NotNull(message="email is mandatory")
	//private String email;
	

	//@NotNull(message="password is mandatory")
	//private String password;
	
	public UserEntity() {
		super();
	}




public UserEntity(Integer id, String name, String address, LocalDate dOB, String gender, String contact,
			String district) {
		super();
		this.id = id;
		this.name = name;
		this.address = address;
		DOB = dOB;
		this.gender = gender;
		this.contact = contact;
		this.district = district;
	}









	@Override
	public String toString() {
		return "UserEntity [id=" + id + ", name=" + name + ", address=" + address + ", DOB=" + DOB + ", gender="
				+ gender + ", contact=" + contact + ", district=" + district + "]";
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public LocalDate getDOB() {
		return DOB;
	}

	public void setDOB(LocalDate dOB) {
		DOB = dOB;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getcontact() {
		return contact;
	}

	public void setcontact(String contact) {
		this.contact = contact;
	}

	public String getDistrict() {
		return district;
	}

	public void setDistrict(String district) {
		this.district = district;
	}

	/*public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}*/
	

}
