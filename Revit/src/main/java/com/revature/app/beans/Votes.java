package com.revature.app.beans;

import java.util.Objects;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;

@Entity
public class Votes {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="id")
	private Integer id;
	
	@OneToMany
	@JoinColumn(name="author_id")
	private Integer author_id;
	
	@OneToMany
	@JoinColumn(name="post_id")
	private Integer post_id;
	
	
	public Votes() {
		// TODO Auto-generated constructor stub
	}


	public Integer getId() {
		return id;
	}


	public void setId(Integer id) {
		this.id = id;
	}


	public Integer getAuthor_id() {
		return author_id;
	}


	public void setAuthor_id(Integer author_id) {
		this.author_id = author_id;
	}


	public Integer getPost_id() {
		return post_id;
	}


	public void setPost_id(Integer post_id) {
		this.post_id = post_id;
	}


	@Override
	public int hashCode() {
		return Objects.hash(author_id, id, post_id);
	}


	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Votes other = (Votes) obj;
		return Objects.equals(author_id, other.author_id) && Objects.equals(id, other.id)
				&& Objects.equals(post_id, other.post_id);
	}


	@Override
	public String toString() {
		return "Votes [id=" + id + ", author_id=" + author_id + ", post_id=" + post_id + "]";
	}
	
}
