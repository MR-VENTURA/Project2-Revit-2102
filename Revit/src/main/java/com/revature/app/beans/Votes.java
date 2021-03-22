package com.revature.app.beans;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name="post_votes")
public class Votes {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="id")
	private Integer id;

	@ManyToOne
	@JoinColumn(name="author_id")
	private People authorId;

	@ManyToOne
	@JoinColumn(name="post_id")
	private Posts postId;


	public Votes() {
		// TODO Auto-generated constructor stub
	}


	public Integer getId() {
		return id;
	}


	public void setId(Integer id) {
		this.id = id;
	}

	public People getAuthor_id() {
		return authorId;
	}


	public void setAuthor_id(People authorId) {
		this.authorId = authorId;
	}


	public Posts getPost_id() {
		return postId;
	}


	public void setPost_id(Posts postId) {
		this.postId = postId;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((authorId == null) ? 0 : authorId.hashCode());
		result = prime * result + ((id == null) ? 0 : id.hashCode());
		result = prime * result + ((postId == null) ? 0 : postId.hashCode());
		return result;
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
		if (authorId == null) {
			if (other.authorId != null)
				return false;
		} else if (!authorId.equals(other.authorId))
			return false;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		if (postId == null) {
			if (other.postId != null)
				return false;
		} else if (!postId.equals(other.postId))
			return false;
		return true;
	}


	@Override
	public String toString() {
		return "Votes [id=" + id + ", authorId=" + authorId + ", postId=" + postId + "]";
	}

}
